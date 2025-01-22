import { useState } from "react";

function PaymentForm() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    billingAddress: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.cardNumber) formErrors.cardNumber = "Card number is required.";
    if (!formData.cvv) formErrors.cvv = "CVV is required.";
    if (!formData.nameOnCard) formErrors.nameOnCard = "Name on card is required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Payment processed", formData);
    } else {
      console.log("Form validation failed", errors);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Payment Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Cardholder Name */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">Name on Card</label>
          <input
            type="text"
            name="nameOnCard"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.nameOnCard}
            onChange={handleChange}
          />
          {errors.nameOnCard && <p className="text-sm text-red-500">{errors.nameOnCard}</p>}
        </div>

        {/* Card Number */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber}</p>}
        </div>

        {/* Expiry Date */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">Expiry Date</label>
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.expiryDate}
            onChange={handleChange}
          />
        </div>

        {/* CVV */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">CVV</label>
          <input
            type="password"
            name="cvv"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.cvv}
            onChange={handleChange}
          />
          {errors.cvv && <p className="text-sm text-red-500">{errors.cvv}</p>}
        </div>

        {/* Billing Address */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">Billing Address</label>
          <textarea
            name="billingAddress"
            rows="2"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.billingAddress}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* ZIP Code */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700">ZIP Code</label>
          <input
            type="text"
            name="zipCode"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Confirm Payment
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
