import express from "express";
import { fetchTestData } from "../controllers/test.controller";

const router = express.Router();

router.get("/data", fetchTestData);

export default router;
