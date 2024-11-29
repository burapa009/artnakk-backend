import express from "express";
import userModel from "../models/userModel.js";

const router = express.Router();

// Get cart
router.get("/:userId", async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userId);
        res.json(user.cartData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update cart
router.put("/:userId", async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userId);
        user.cartData = req.body.cartData;
        await user.save();
        res.json(user.cartData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router; 