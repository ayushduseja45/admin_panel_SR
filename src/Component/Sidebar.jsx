import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", icon: HomeIcon, current: true },
  { name: "Users", icon: UsersIcon, current: false },
  { name: "Loan Applications", icon: FolderIcon, current: false },
  { name: "Calendar", icon: CalendarIcon, current: false },
  { name: "Documents", icon: DocumentIcon, current: false },
];

const teams = [
  { id: 1, name: "Heroicons", initial: "H" },
  { id: 2, name: "Tailwind Labs", initial: "T" },
  { id: 3, name: "Workcation", initial: "W" },
];

function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed z-50 bottom-4 right-4 bg-indigo-600 p-2 rounded-full text-white shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar for desktop */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex h-16 items-center px-4 border-b border-gray-200 dark:border-gray-700">
            <img className="h-8 w-auto" src="image.png" alt="Your Company" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  item.current
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <item.icon
                  className={`mr-3 h-6 w-6 ${
                    item.current
                      ? "text-gray-500 dark:text-gray-300"
                      : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Teams */}
          <div className="px-3 py-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="px-3 text-sm font-medium text-gray-500 dark:text-gray-400">
              Your teams
            </h3>
            <div className="mt-1 space-y-1">
              {teams.map((team) => (
                <Link
                  key={team.id}
                  to={`/teams/${team.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-[0.625rem] font-medium text-gray-600 dark:text-gray-300">
                    {team.initial}
                  </span>
                  <span className="ml-3 truncate">{team.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="px-3 py-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              to="/settings"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Cog6ToothIcon className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
              Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
