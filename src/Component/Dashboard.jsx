import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-6">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Admin Dashboard
        </h1>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Stat Card 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Total Users
          </h3>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            1,200
          </p>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Active Sessions
          </h3>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            350
          </p>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Pending Requests
          </h3>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">
            52
          </p>
        </div>

        {/* Stat Card 4 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Revenue
          </h3>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">
            $23,450
          </p>
        </div>
      </div>

      {/* Data Table or Graph Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  ID
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  User
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  Action
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t dark:border-gray-700">
                <td className="px-4 py-2 text-sm">1</td>
                <td className="px-4 py-2 text-sm">John Doe</td>
                <td className="px-4 py-2 text-sm">Logged In</td>
                <td className="px-4 py-2 text-sm">Jan 5, 2025</td>
              </tr>
              <tr className="border-t dark:border-gray-700">
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
