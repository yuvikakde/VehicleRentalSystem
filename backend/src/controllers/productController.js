import { Product } from './../models/Product.js';

// Get all vehicles
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a vehicle
const addProduct = async (req, res) => {
    const { name, brand, category, rentPerDay, availability } = req.body;

    try {
        const product = await Product.create({ name, brand, category, rentPerDay, availability });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getProducts, addProduct };
