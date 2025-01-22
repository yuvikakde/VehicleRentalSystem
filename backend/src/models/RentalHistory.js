import mongoose from "mongoose";

const RentalHistorySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  rentDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export const RentalHistory = mongoose.model("RentalHistory", RentalHistorySchema);

module.exports = RentalHistory;
