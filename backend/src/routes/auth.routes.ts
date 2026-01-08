import express from "express";
import { register, login, logout } from "../controllers/auth.controller";

const router = express.Router();

// Registration route
router.post("/register", register);

// Login route
router.post("/login", login);

//logout route
router.post("/logout", logout);

export default router;
