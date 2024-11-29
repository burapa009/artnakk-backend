import express from "express";
import orderModel from "../models/orderModel.js";

const router = express.Router();

// Get orders
router.get("/:userId", async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.params.userId });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create order
router.post("/", async (req, res) => {
    try {
        const order = new orderModel(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router; 