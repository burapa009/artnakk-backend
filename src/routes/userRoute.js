import express from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/userController.js";

const router = express.Router();

// ย้าย admin route ขึ้นมาก่อน route อื่นๆ
router.post("/admin/login", adminLogin);

// route อื่นๆ คงเดิม
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router; 