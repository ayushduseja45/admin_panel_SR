import React, { useState } from 'react';

const UserCard = ({ user, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 p-4 mb-4 rounded-lg cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <span className="text-gray-500 dark:text-gray-400">{index + 1}</span>
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold">{user.fullName}</h3>
          <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
        </div>
        <button className="text-sm text-blue-600 dark:text-blue-400">
          {isExpanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-3 text-gray-700 dark:text-gray-300">
          <p>{user.details}</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
