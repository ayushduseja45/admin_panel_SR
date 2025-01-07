import React from "react";
import GoogleButton from "../AuthPages/GoogleAuth/GoogleButton.jsx";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-sm p-8 bg-gray-700 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <img src="/image.png" alt="Logo" className="mx-auto w-24 h-24" />
          <h2 className="text-2xl font-bold mt-4 text-white">Admin Panel</h2>
        </div>
        <div className="mt-6">
          <GoogleButton />
        </div>
        <p className="mt-4 text-center text-sm text-gray-300">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Register as new admin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;