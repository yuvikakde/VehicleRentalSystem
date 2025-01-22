import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  vehicleId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

export const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
