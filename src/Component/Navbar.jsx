import { useState, useEffect, useRef } from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDarkMode } from "../Context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase-config";

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Ref for the profile dropdown
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const auth = getAuth(app); // Initialize auth instance
    const currentUser = auth.currentUser;

    if (currentUser) {
      // Save user data in localStorage
      const userData = {
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } else {
      // Retrieve user data from localStorage if it exists
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }

    // Close the dropdown if click occurs outside
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    // Attach the event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      console.log("User signed out successfully.");
      // Clear user data from localStorage
      localStorage.removeItem("user");
      setUser(null); // Reset user state
      // Redirect to login or any other page after logout
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-30 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo or Home */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-lg font-semibold text-gray-900 dark:text-gray-200 p-5"
            >
              AdminPanel
            </Link>
          </div>

          {/* Search */}
          <div className="flex-1 min-w-0 md:px-2 lg:px-0">
            <div className="flex items-center px-2">
              <div className="w-full max-w-2xl">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-700 sm:text-sm sm:leading-6"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              {isDarkMode ? "🌞" : "🌙"}
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                {user?.photoURL && (
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.photoURL}
                    alt="User avatar"
                  />
                )}
                <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-200">
                  {user?.displayName || "User"}
                </span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
