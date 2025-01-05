import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Welcome, Admin</span>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
            Log Out
          </button>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Stat Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-2xl font-bold text-indigo-600">1,200</p>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700">Active Sessions</h3>
          <p className="text-2xl font-bold text-indigo-600">350</p>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700">Pending Requests</h3>
          <p className="text-2xl font-bold text-red-600">52</p>
        </div>

        {/* Stat Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <p className="text-2xl font-bold text-green-600">$23,450</p>
        </div>
      </div>

      {/* Data Table or Graph Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">ID</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">User</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">Action</th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 text-sm">1</td>
                <td className="px-4 py-2 text-sm">John Doe</td>
                <td className="px-4 py-2 text-sm">Logged In</td>
                <td className="px-4 py-2 text-sm">Jan 5, 2025</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 text-sm">2</td>
                <td className="px-4 py-2 text-sm">Jane Smith</td>
                <td className="px-4 py-2 text-sm">Requested Approval</td>
                <td className="px-4 py-2 text-sm">Jan 4, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
