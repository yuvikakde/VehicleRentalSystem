import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCarAlt, FaInfoCircle, FaPhoneAlt, FaUser, FaUserPlus, FaBlog } from "react-icons/fa";
import logo from "../assets/images/car_emoji.png";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-13 w-16 mr-2"
          />
          <h1 className="text-white text-3xl font-extrabold">
            Rent<span className="text-yellow-300">Vehicle</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white items-center text-lg">
          <Link
            to="/home1"
            className="flex items-center hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            <FaHome className="mr-2" /> Home
          </Link>

          <Link
            to="/about"
            className="flex items-center hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            <FaInfoCircle className="mr-2" /> About Us
          </Link>

          <Link
            to="/blog"
            className="flex items-center hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            <FaBlog className="mr-2" /> Blog
          </Link>

          <Link
            to="/contact"
            className="flex items-center hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            <FaInfoCircle className="mr-2" /> Contact Us
          </Link>

          <Link
            to="/profile"
            className="flex items-center hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            <FaUser className="mr-2" /> Profile
          </Link>
        </div>

        {/* Login/Sign Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            <FaUser className="mr-2" /> Login
          </Link>
          <Link
            to="/register"
            className="flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            <FaUserPlus className="mr-2" /> Register
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white text-3xl">
            <FaCarAlt />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
