import React, { useState, useEffect } from "react";
import { FaCity } from "react-icons/fa";
import blurImage from "../assets/images/bg.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VEHICLE_DATA = [
  {
    id: 1,
    name: "VW Golf 6",
    brand: "Volkswagen",
    category: "Hatchback",
    rentPerDay: 450,
    image: "../src/assets/images/golf.jpg",
  },
  {
    id: 2,
    name: "Toyota Fortuner",
    brand: "Toyota",
    category: "SUV",
    rentPerDay: 750,
    image: "../src/assets/images/fortuner.jpg",
  },
  {
    id: 3,
    name: "Honda City",
    brand: "Honda",
    category: "Sedan",
    rentPerDay: 500,
    image: "../src/assets/images/city.jpg",
  },
  {
    id: 4,
    name: "Lamborghini Aventador",
    brand: "Lamborghini",
    category: "Rocket",
    rentPerDay: 9999,
    image: "../src/assets/images/lambo.jpg",
  },
  {
    id: 5,
    name: "Mercedes-Benz GLK",
    brand: "Mercedes-Benz",
    category: "SUV",
    rentPerDay: 5999,
    image: "../src/assets/images/gls.jpg",
  },
  {
    id: 6,
    name: "Boattail",
    brand: "Rolls Royce",
    category: "Luxury",
    rentPerDay: 99999,
    image: "../src/assets/images/boattail.jpg",
  },
  {
    id: 7,
    name: "Ford Mustang",
    brand: "Ford",
    category: "Sports",
    rentPerDay: 10000,
    image: "../src/assets/images/mastang.jpg",
  },
  {
    id: 8,
    name: "Velar",
    brand: "Range Rover",
    category: "Sports",
    rentPerDay: 9950,
    image: "../src/assets/images/velar.jpg",
  },
  {
    id: 9,
    name: "Ghost",
    brand: "Rolls Royce",
    category: "Luxury",
    rentPerDay: 99999,
    image: "../src/assets/images/ghost.jpg",
  },
];

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    city: "Pune",
    bookingType: "Daily",
    pickupDate: "",
    pickupTime: "",
    dropDate: "",
    dropTime: "",
  });
  const [products1, setProducts1] = useState([]);

  const navigate = useNavigate();

  const apiUrl = "http://192.168.1.8:5000/api/v1/product/get-products";

  const getProduct = async () => {
    try {
      const { data } = await axios.get(apiUrl);
      console.log(data.products);
      setProducts1(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value,
    });
  };

  const findVehicles = () => {
    setVehicles(VEHICLE_DATA);
  };

  const bookVehicle = (vehicle) => {
    alert(`You selected ${vehicle.name}. Proceed to booking & payment.`);
  };

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
          <span className="text-blue-400">Rent</span>Vehicle
        </h1>
        <p className="text-sm italic">Customer safety is our Priority..</p>

        <h2 className="text-5xl font-bold mt-6">ASSURED RENTALS</h2>
        <p className="text-lg mt-4">
          Rent from India's Largest Fleet of Vehicles, Trusted by Customers
        </p>

        

        <div className="bg-white bg-opacity-90 text-gray-900 p-9 rounded-lg mt-10 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Book Your Ride</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">City</label>
              <div className="flex items-center space-x-2">
                <FaCity />
                <select
                  name="city"
                  className="w-full px-4 py-2 rounded-md border border-gray-300"
                  value={searchCriteria.city}
                  onChange={handleChange}
                >
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chh.Sambhajinagar">Chh.Sambhajinagar</option>
                </select>
              </div>
            </div>
            {/* Additional inputs */}
          </div>
          <button
            onClick={findVehicles}
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition mt-6"
          >
            Find Cars
          </button>
          <button onClick={() => navigate("/bike-rentals")}
                        className="px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition mt-6"

            >Find Bike </button>

        </div>
        <div>
          
        </div>

        {vehicles.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold">{vehicle.name}</h3>
                <p>Brand: {vehicle.brand}</p>
                <p>Category: {vehicle.category}</p>
                <p>Rent Per Day: ₹{vehicle.rentPerDay}</p>
                {/* <button
                  onClick={() => bookVehicle(vehicle)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
                >
                  Book Now
                </button> */}
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => navigate("/user-booking-details")}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
