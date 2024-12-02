import express from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/userController.js";

const router = express.Router();

// เพิ่ม route สำหรับ login ทั่วไป
router.post("/login", loginUser);
router.post("/auth/login", loginUser);  // เพิ่ม route เดิมเพื่อความเข้ากันได้
router.post("/admin/login", adminLogin);
router.post("/register", registerUser);

export default router; 