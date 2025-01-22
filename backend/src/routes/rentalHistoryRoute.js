import express from 'express'
const RentalHistory = require("../models/RentalHistory.model");
const router = express.Router();

// Get rental history by userId
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const history = await RentalHistory.find({ userId });
    res.status(200).json({ rentalHistory: history });
  } catch (err) {
    res.status(500).json({ error: "Error fetching rental history", details: err.message });
  }
});

module.exports = router;
