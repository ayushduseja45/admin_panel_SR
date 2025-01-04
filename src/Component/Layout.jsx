import { Navbar } from "../Component/Navbar";
import { Sidebar } from "../Component/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0 lg:ml-64">
          <Navbar />
          <main className="py-6 px-4 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
