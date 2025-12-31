import { Request, Response } from "express";
import prisma from "../config/prisma";
import { verifyAccessToken } from "../utils/jwt";

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  if (!verifyAccessToken(token)) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { userId: id },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// delete user by ID
export const deleteUserById = async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }
  if (!verifyAccessToken(token)) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }

  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const user = await prisma.user.delete({
      where: { userId: id },
    });
    res.status(200).json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Update user by ID
export const updateUserById = async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  if (!verifyAccessToken(token)) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }

  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  if (!firstName || !lastName || !email) {
    return res
      .status(400)
      .json({ message: "firstName, lastName and email are required" });
  }

  try {
    const user = await prisma.user.update({
      where: { userId: id },
      data: { firstName, lastName, email },
    });
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
