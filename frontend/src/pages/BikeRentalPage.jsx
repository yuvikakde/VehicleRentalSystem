import React, { useState } from "react";
import blurImage from "../assets/images/bg.jpeg";
import { useNavigate } from "react-router-dom";

const BIKE_DATA = [
  {
    id: 1,
    name: "KTM Duke 390",
    brand: "KTM",
    category: "Sports",
    rentPerDay: 1200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtccx3lR87HbuiG--cJfpHbThsWbQhuEL_3w&s",
  },
  {
    id: 2,
    name: "Royal Enfield Classic",
    brand: "Royal Enfield",
    category: "Cruiser",
    rentPerDay: 1500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwovVgrZp1tGhxTY1m1Pz-0FliwOmHxUqqFg&s",
  },
  {
    id: 3,
    name: "Yamaha R15",
    brand: "Yamaha",
    category: "Sports",
    rentPerDay: 1000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ztM7lDNtzxePK2UCIUbO3L_erXYIpdhqpA&s",
  },
  {
    id: 4,
    name: "Yamaha MT",
    brand: "Yamaha",
    category: "Sports",
    rentPerDay: 1000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhW90BsMdbnZl7FMfaQDjnS2owxZ4vqpF3g&s",
  },
  {
    id: 5,
    name: "Pulsar 250",
    brand: "Bajaj",
    category: "Sports",
    rentPerDay: 1000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSgHn4fObcAmcmlnAkZ9WNH02Ct-igxBsVg&s",
  },
  {
    id: 6,
    name: "Hayabusa",
    brand: "Suzuki",
    category: "Rocket",
    rentPerDay: 1000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJyyqUyRQU4UiO0pZbs_oGsVxrQkbv_2zZw&s",
  },
  {
    id: 7,
    name: "KTM RC",
    brand: "KTM",
    category: "Sports",
    rentPerDay: 1000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD275gCRDpmPQTxUuLCueBtnjFqSVpUEzH6g&s",
  },
];

const BikeRentalPage = () => {
  const [bikes, setBikes] = useState(BIKE_DATA);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${blurImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-white text-center p-8">
        <h1 className="text-4xl font-extrabold mb-2">
          <span className="text-blue-400">Rent</span>Bike
        </h1>
        <p className="text-sm italic">Explore the city your way!</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
            >
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{bike.name}</h3>
              <p>Brand: {bike.brand}</p>
              <p>Category: {bike.category}</p>
              <p>Rent Per Day: ₹{bike.rentPerDay}</p>
              
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
                onClick={() => navigate("/user-booking-details")} 
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BikeRentalPage;
