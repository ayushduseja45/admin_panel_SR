import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Ayush Duseja",
    email: "ayush@example.com",
    phone: "+91 9876543210",
    address: "Mumbai, India",
    bio: "Tech enthusiast and lifelong learner.",
    profilePic: "https://via.placeholder.com/150",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen w-[100%] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-6 flex justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">My Profile</h2>
          <button
            className={`px-4 py-2 rounded-md text-sm ${
              isEditing
                ? "bg-green-500 hover:bg-green-600 dark:hover:bg-green-400"
                : "bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400"
            }`}
            onClick={toggleEditing}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={profile.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-300 dark:border-gray-700 object-cover"
          />
          {isEditing && (
            <div>
              <label
                htmlFor="profilePic"
                className="block text-sm text-gray-700 dark:text-gray-400"
              >
                Update Profile Picture
              </label>
              <input
                type="text"
                id="profilePic"
                name="profilePic"
                value={profile.profilePic}
                onChange={handleInputChange}
                placeholder="Enter image URL"
                className="mt-1 w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>
          )}
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              Name
            </label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            ) : (
              <p className="mt-1 text-lg">{profile.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            ) : (
              <p className="mt-1 text-lg">{profile.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              Phone
            </label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            ) : (
              <p className="mt-1 text-lg">{profile.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              Address
            </label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                className="mt-1 w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            ) : (
              <p className="mt-1 text-lg">{profile.address}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              Bio
            </label>
            {isEditing ? (
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
                rows="3"
                className="mt-1 w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            ) : (
              <p className="mt-1 text-lg">{profile.bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
