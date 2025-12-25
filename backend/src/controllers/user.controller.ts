import { Request, Response } from "express";
import prisma from "../config/prisma";

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
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
  const { id } = req.params;
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
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
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
