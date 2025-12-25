import { Request, Response } from "express";
import prisma from "../config/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    return res
      .status(400)
      .json({
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
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { userId: user.userId },
      process.env.JWT_SECRET || "secret",
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// User logout
export const logout = async (req: Request, res: Response) => {
  // Invalidate token logic can be implemented here if using a token blacklist
  res.status(200).json({ message: "Logout successful" });
};
