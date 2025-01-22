import express from 'express'
const Payment = require("../models/Payment.model");
const router = express.Router();

// Process a payment
router.post("/", async (req, res) => {
  try {
    const { userId, cardNumber, expiryDate, cvv, amount } = req.body;
    const newPayment = new Payment({ userId, cardNumber, expiryDate, cvv, amount });
    await newPayment.save();
    res.status(201).json({ message: "Payment processed successfully!", payment: newPayment });
  } catch (err) {
    res.status(500).json({ error: "Error processing payment", details: err.message });
  }
});

module.exports = router;
