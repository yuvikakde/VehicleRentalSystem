import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "test123") {
      toast.success("Login successful");
    } else {
      toast.error("Invalid credentials");
    }
    console.log(email);
    console.log(password);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-8">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-400 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-400 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-lg shadow-md hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-purple-400 hover:underline hover:text-purple-500"
          >
            REGISTER
          </a>
        </p>
        <p className="text-center text-gray-400 mt-6">
          Forget password{" "}
          <a
            href="/forget-password"
            className="text-purple-400 hover:underline hover:text-purple-500"
          >
            click HERE
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
