import express from "express";
import productModel from "../models/productModel.js";

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await productModel.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add product
router.post("/add", async (req, res) => {
    try {
        const product = new productModel(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router; 