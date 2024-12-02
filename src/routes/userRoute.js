import express from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/userController.js";

const router = express.Router();

// Admin routes
router.post("/login", adminLogin);         // /auth/login
router.post("/admin/login", adminLogin);   // /auth/admin/login

// User routes
router.post("/user/login", loginUser);     // /auth/user/login
router.post("/user/register", registerUser);

export default router; 