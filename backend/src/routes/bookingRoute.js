import express from 'express'
const Booking = require("../models/Booking.model");
const router = express.Router();

// Create a new booking
router.post("/", async (req, res) => {
  try {
    const { vehicleId, userId, startDate, endDate } = req.body;
    const newBooking = new Booking({ vehicleId, userId, startDate, endDate });
    await newBooking.save();
    res.status(201).json({ message: "Booking created successfully!", booking: newBooking });
  } catch (err) {
    res.status(500).json({ error: "Error creating booking", details: err.message });
  }
});

module.exports = router;

export default bookingRoute;
