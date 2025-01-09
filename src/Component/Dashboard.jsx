// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-6">
//       {/* Dashboard Header */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
//           Admin Dashboard
//         </h1>
//       </div>

//       {/* Stats Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {/* Stat Card 1 */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//             Total Users
//           </h3>
//           <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
//             1,200
//           </p>
//         </div>

//         {/* Stat Card 2 */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//             Active Sessions
//           </h3>
//           <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
//             350
//           </p>
//         </div>

//         {/* Stat Card 3 */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//             Pending Requests
//           </h3>
//           <p className="text-2xl font-bold text-red-600 dark:text-red-400">
//             52
//           </p>
//         </div>

//         {/* Stat Card 4 */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
//             Revenue
//           </h3>
//           <p className="text-2xl font-bold text-green-600 dark:text-green-400">
//             $23,450
//           </p>
//         </div>
//       </div>

//       {/* Data Table or Graph Section */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
//           Recent Activity
//         </h2>
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//           <table className="w-full text-left">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
//                   ID
//                 </th>
//                 <th className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
//                   User
//                 </th>
//                 <th className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
//                   Action
//                 </th>
//                 <th className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
//                   Date
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-t dark:border-gray-700">
//                 <td className="px-4 py-2 text-sm">1</td>
//                 <td className="px-4 py-2 text-sm">John Doe</td>
//                 <td className="px-4 py-2 text-sm">Logged In</td>
//                 <td className="px-4 py-2 text-sm">Jan 5, 2025</td>
//               </tr>
//               <tr className="border-t dark:border-gray-700">
//                 <td className="px-4 py-2 text-sm">2</td>
//                 <td className="px-4 py-2 text-sm">Jane Smith</td>
//                 <td className="px-4 py-2 text-sm">Requested Approval</td>
//                 <td className="px-4 py-2 text-sm">Jan 4, 2025</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState(null); // State to store API data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwZDg4ZGQ1NWQxYjAwZDg0ZWU4MWQwYjk2M2RlNGNkOGM0ZmFjM2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQXl1c2ggRHVzZWphIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0p4aHdTckdKUEJPck51REc3ZHBnbjU2Wk9WRFdMZ0ZDQW15d192bjNsUmpJREFXUT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9lZHUtbG9hbi0yNWI2MiIsImF1ZCI6ImVkdS1sb2FuLTI1YjYyIiwiYXV0aF90aW1lIjoxNzM2NDEyMDIwLCJ1c2VyX2lkIjoiUWJZSlJVVmNaRE8ya2JPejVVRkJzUmY5ZVF2MiIsInN1YiI6IlFiWUpSVVZjWkRPMmtiT3o1VUZCc1JmOWVRdjIiLCJpYXQiOjE3MzY0MTIwMjAsImV4cCI6MTczNjQxNTYyMCwiZW1haWwiOiJkdXNlamFheXVzaDQ1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA1MTQ3MDEzNzU1MzcxNjQ0MTE1Il0sImVtYWlsIjpbImR1c2VqYWF5dXNoNDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.ehYGxCRsxT90LMnLtVxd_TlLhxgqCLXFfy7m88mHa6YCOqIxKdfIsqPQjWMPdco9jtTYRMqb1bodSKbtYIMJjOhfNN7Q0VVB9FwRLWkFUHxZQDP8wPYnomalY0S4O3WoqatIu_-WJ5v5Uvo8GnVr-I141EcqgIwr7nTXGK_vfw7fxVIvPwumkbQ6PcnXrRBrJGLBDyOv42xpUzN-kNx78Z173pH_77QXEXsfx_8N5u1eKrCN9Uhvo7Qa3JtILsVynJHlYvkN3YuCgCg5VleKeLyTedWqzVhDMl5VuyhGiQS2_qrMhH4dnicVdyEurlNcQZ51YyYqx2dUk6pK5ZiL9w"; // Replace with your actual token


  // Fetch data from the API using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const token=  localStorage.getItem("token")

        const response = await axios.get("http://localhost:8000/api/admin/get_dashboard_stats", {
           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } 

        });

        setStats(response.data); // Update state with fetched data
        setLoading(false); // Data loaded
      } catch (err) {
        setError(err.response?.data?.message || err.message); // Handle error
        setLoading(false); // Stop loading on error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 dark:text-gray-200">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

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
        {/* Stat Cards with dynamic data */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Total Users
          </h3>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            {stats?.totalUsers ?? "N/A"}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Active Sessions
          </h3>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            {stats?.activeSessions ?? "N/A"}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Pending Requests
          </h3>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">
            {stats?.pendingRequests ?? "N/A"}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Revenue
          </h3>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">
            {stats?.revenue ? `$${stats.revenue}` : "N/A"}
          </p>
        </div>
      </div>

      {/* Data Table Section */}
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
              {stats?.recentActivity?.map((activity, index) => (
                <tr
                  key={index}
                  className="border-t dark:border-gray-700"
                >
                  <td className="px-4 py-2 text-sm">{activity.id}</td>
                  <td className="px-4 py-2 text-sm">{activity.user}</td>
                  <td className="px-4 py-2 text-sm">{activity.action}</td>
                  <td className="px-4 py-2 text-sm">{activity.date}</td>
                </tr>
              )) || (
                <tr>
                  <td className="px-4 py-2 text-sm" colSpan={4}>
                    No recent activity found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
