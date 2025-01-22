import express from "express";

const router = express.Router();

const vehicles = [
  {
    _id: "1",
    name: "Honda Civic",
    brand: "Honda",
    category: "Sedan",
    rentPerDay: 40,
    availability: true,
  },
  {
    _id: "2",
    name: "Toyota Camry",
    brand: "Toyota",
    category: "Sedan",
    rentPerDay: 50,
    availability: false,
  },
  {
    _id: "3",
    name: "Tesla Model 3",
    brand: "Tesla",
    category: "Electric",
    rentPerDay: 100,
    availability: true,
  },
];

// Endpoint to get vehicles
router.get("/", (req, res) => {
  res.json(vehicles);
});

export default router;
