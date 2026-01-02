import { Request, Response } from "express";
import prisma from "../config/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signAccessToken, signRefreshToken } from "../utils/jwt";
import { prismaVersion } from "../generated/prisma/internal/prismaNamespace";

// User registration
export const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (!email.trim()) {
    return res.status(400).json({ message: "Provide an email address." });
  }

  if (!firstName.trim() || !lastName.trim()) {
    return res.status(400).json({
      message: "Please ensure both first name and last name are provided.",
    });
  }

  if (firstName.trim().length < 2 || lastName.trim().length < 2) {
    return res.status(400).json({
      message: "First and last names must be at least 2 characters long",
    });
  }

  if (!password.trim() || !confirmPassword.trim()) {
    return res.status(400).json({ message: "Password fields cannot be empty" });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long" });
  }

  // Check for password complexity
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const exisitingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (exisitingUser) {
      if (
        exisitingUser.firstName.toLocaleLowerCase() ===
          firstName.toLocaleLowerCase() ||
        exisitingUser.lastName.toLocaleLowerCase() ===
          lastName.toLocaleLowerCase()
      ) {
        res.status(409).json({ message: "User already exists." });
      } else {
        res.status(409).json({ message: "Email address already in use." });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });

    const isRegistrationComplete = true;

    res.status(201).json({
      message: "User registered successfully",
      registered: isRegistrationComplete,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// User login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { roles: true },
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const accessToken = signAccessToken({
      sub: user.userId,
      email: user.email,
      roles: user.roles.map((role) => role.name),
    });

    const refreshToken = signRefreshToken({
      sub: user.userId,
      email: user.email,
    });

    await prisma.session.create({
      data: {
        userId: user.id,
        token: refreshToken,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "development",
      sameSite: "strict",
      path: "/api/auth/refresh",
    });

    res.status(200).json({
      message: "Login successful",
      accessToken,
      user: {
        userId: user.userId,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// auth/refresh-token
export const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Refresh token is required" });
  }

  try {
    const session = await prisma.session.findUnique({
      where: { token: refreshToken },
      include: { user: { include: { roles: true } } },
    });

    if (!session) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    if (session.expiresAt < new Date()) {
      return res.status(401).json({ message: "Refresh token has expired" });
    }

    const user = session.user;

    const newAccessToken = signAccessToken({
      sub: user.userId,
      email: user.email,
      roles: user.roles.map((role) => role.name),
    });

    const newRefreshToken = signRefreshToken({
      sub: user.userId,
      email: user.email,
    });

    // Update session with new refresh token
    await prisma.session.update({
      where: { id: session.id },
      data: {
        token: newRefreshToken,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/api/auth/refresh",
    });

    res.status(200).json({
      accessToken: newAccessToken,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// User logout
export const logout = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(200).json({ message: "Already logged out" });
  }

  try {
    await prisma.session.deleteMany({
      where: { token: refreshToken },
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/api/auth/refresh",
    });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to logout. Please try again.",
    });
  }
};
