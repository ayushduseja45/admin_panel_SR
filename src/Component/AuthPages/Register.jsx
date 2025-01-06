import React from 'react';

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-sm p-8 bg-gray-700 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <img src="/image.png" alt="Logo" className="mx-auto w-24 h-24" />
          <h2 className="text-2xl font-bold mt-4">Register as Admin</h2>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
