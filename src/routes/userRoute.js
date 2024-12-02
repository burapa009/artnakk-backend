import express from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/userController.js";

const router = express.Router();

// แก้ไข route ให้ตรงกับที่ frontend เรียก
router.post("/login", adminLogin);           // route สำหรับ admin login
router.post("/user/login", loginUser);       // route สำหรับ user login
router.post("/user/register", registerUser); // route สำหรับ register

export default router; 