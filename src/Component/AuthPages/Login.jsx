import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../AuthPages/GoogleAuth/GoogleButton.jsx";
import axios  from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // API call to the backend for authentication
      const response = await axios.post("http://your-backend-url/api/login", {
        username,
        password,
      });

      if (response.data.success) {
        // Login successful, save user details in localStorage (if needed)
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", response.data.username); // optional

        // Redirect to home page
        navigate("/home");
      } else {
        // Handle login failure
        setError(response.data.message || "Invalid username or password.");
      }
    } catch (error) {
      // Handle server or network errors
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 dark:bg-gray-900">
      <div className="w-full max-w-sm p-8 bg-gray-700 dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <img src="/image.png" alt="Logo" className="mx-auto w-24 h-24" />
          <h2 className="text-2xl font-bold mt-4 text-white dark:text-white">
            Admin Panel
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleLogin}>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300 dark:text-gray-200"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required
              className="w-full p-3 mt-1 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-gray-800 text-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 dark:text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
              className="w-full p-3 mt-1 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-gray-800 text-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-300 dark:text-gray-400">
          Dont have an account?{" "}
          <a
            href="/register"
            className="text-indigo-400 hover:text-indigo-300 font-medium dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Register as new admin
          </a>
        </p>
        <div className="mt-6">
          <GoogleButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
