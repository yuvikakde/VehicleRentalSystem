import React from "react";
import { Link } from "react-router-dom";
import car from "../assets/images/swift.jpg";
import audi from "../assets/images/audi.jpg";
import xuv from "../assets/images/xuv.jpg";
import mercedes from "../assets/images/mercedes.jpg";
import fortuner from "../assets/images/fortuner.jpg";
import bmw from "../assets/images/bmw.jpg";
const PopularCars = () => {
  const cars = [
    { id: 1, name: "Swift", price: "$30 per hour", image: car},
    { id: 2, name: "XUV", price: "$25 per hour", image: xuv },
    { id: 3, name: "Audi A4", price: "$28 per hour", image: audi },
    {
      id: 4,
      name: "Mercedes-Benz C-Class",
      price: "$35 per hour",
      image: mercedes,
    },
    { id: 5, name: "Fortuner", price: "$30 per hour", image: fortuner },
    { id: 6, name: "BMW 3 Series", price: "$25 per hour", image: bmw },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Our Popular Cars
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">{car.name}</h3>
              <p className="text-lg text-gray-600 mt-2">{car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
