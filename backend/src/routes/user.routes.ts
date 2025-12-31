import express from "express";
import {
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/user.controller";

const router = express.Router();

// Get user by ID
router.get("/:id", getUserById);

// Delete user by ID
router.delete("/:id", deleteUserById);

// Update user by ID
router.put("/:id", updateUserById);

export default router;
