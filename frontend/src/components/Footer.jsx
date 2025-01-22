import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 shadow-lg py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl font-bold">
              Rent<span className="text-yellow-300">Vehicle</span>
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Trusted platform for renting vehicles anytime, anywhere. Experience convenience and quality service with us.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 flex justify-center space-x-8 mb-8 md:mb-0">
            <a href="/home" className="text-lg hover:text-yellow-300 transition">HOME</a>
            {/* <a href="/vehicles" className="text-lg hover:text-yellow-300 transition">VEHICLES</a> */}
            <a href="/contact" className="text-lg hover:text-yellow-300 transition">CONTACT</a>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-4 bg-blue-700 rounded-full hover:bg-yellow-300 hover:text-blue-700 transition"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-4 bg-blue-700 rounded-full hover:bg-yellow-300 hover:text-blue-700 transition"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-4 bg-blue-700 rounded-full hover:bg-yellow-300 hover:text-blue-700 transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-4 bg-blue-700 rounded-full hover:bg-yellow-300 hover:text-blue-700 transition"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center text-lg text-gray-200">
          <p>&copy; {new Date().getFullYear()} RentVehicle. All rights reserved@Module3.</p>
          <div className="space-x-6">
            <a href="/terms" className="hover:text-yellow-300 transition">Terms of Service</a>
            <a href="/privacy" className="hover:text-yellow-300 transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
