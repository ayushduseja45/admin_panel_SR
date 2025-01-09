import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]); // State to store users
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading
  const [error, setError] = useState(""); // State to track errors

  // Fetch all users from the backend
  useEffect(() => {
    
    const fetchUsers = async () => {
    // const token  = localStorage.getItem("token");
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/api/admin/get_all_users?page=0&limit=10",
          { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        );
        console.log(response.data.users);
        setUsers(response.data.users); // response.data contains the user array
        setError(""); 
      } catch (err) {
        setError("Failed to fetch users. Please try again later.");
        console.error("Error fetching users: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on the search term
  

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-6 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
      />

      {loading && <p className="text-gray-500 dark:text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {
        
      }

      {users.map((user, index) => (
        <UserCard key={index} user={user} index={index} />
      ))}

      {users.length === 0 && !loading && !error && (
        <p className="text-gray-500 dark:text-gray-400">No users found.</p>
      )}
    </div>
  );
};

export default UserList;
