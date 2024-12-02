import express from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/userController.js";

const router = express.Router();

// Admin routes
router.post("/admin/login", adminLogin);    // เปลี่ยนเป็น /api/admin/login
router.post("/admin/list", adminLogin);     // route สำหรับดูรายการ

// User routes
router.post("/login", loginUser);           // /api/user/login
router.post("/register", registerUser);     // /api/user/register

export default router; 