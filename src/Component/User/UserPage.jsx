import React from 'react';
import UserList from '../User/UserList';

const UsersPage = () => {
  return (
    <div className="text-gray-900 bg-gray-50 dark:text-gray-200 dark:bg-gray-900 min-h-screen">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h1 className="text-xl font-bold">Users</h1>
        
      </div>
      <UserList />
    </div>
  );
};

export default UsersPage;
