import express from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/userController.js";

const router = express.Router();

// Admin routes
router.post("/admin", adminLogin);        // /api/user/admin
router.post("/admin/login", adminLogin);   // /auth/admin/login

// User routes
router.post("/login", loginUser);         // /api/user/login
router.post("/register", registerUser);    // /api/user/register

export default router; 