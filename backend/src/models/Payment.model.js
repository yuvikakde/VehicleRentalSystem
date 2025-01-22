import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export const Payment = mongoose.model("Payment", PaymentSchema);

module.exports = Payment;
