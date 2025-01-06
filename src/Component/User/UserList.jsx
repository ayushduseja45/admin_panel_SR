import React, { useState } from 'react';
import { users } from './user';
import UserCard from './UserCard';

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-6 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
      />
      {filteredUsers.map((user, index) => (
        <UserCard key={user.id} user={user} index={index} />
      ))}
      {filteredUsers.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No users found.</p>
      )}
    </div>
  );
};

export default UserList;
