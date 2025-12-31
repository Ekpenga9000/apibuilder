import { Request, Response } from "express";
import prisma from "../config/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signAccessToken, signRefreshToken } from "../utils/jwt";

// User registration
export const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

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
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User registered successfully", user });
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

    res.status(200).json({
      message: "Login successful",
      accessToken,
      refreshToken,
      user: {
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        roles: user.roles.map((role) => role.name),
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// auth/refresh-token
export const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
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

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// User logout
export const logout = async (req: Request, res: Response) => {
  // Invalidate token logic can be implemented here if using a token blacklist

  const { refreshToken } = req.body;
  if (refreshToken) {
    await prisma.session.deleteMany({
      where: { token: refreshToken },
    });
    res.status(204).send({ message: "Logout successful" });
  } else {
    res.status(400).json({ message: "Refresh token is required for logout" });
  }
};
