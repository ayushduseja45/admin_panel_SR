import "./App.css";
import Layout from "./Component/Layout";
import Login from "./Component/AuthPages/Login";
import Register from "./Component/AuthPages/Register";
import { DarkModeProvider } from "./Context/ContextProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Add this import

// Import Profile component (You can create the Profile component as needed)
import Profile from "./Component/Profilr";
import Dashboard from "./Component/Dashboard";
import UsersPage from "./Component/User/UserPage";
import LoanApplicants from "./Component/LoanApplicants/LoanApplicants";

function App() {
  return (
      <DarkModeProvider>
        <Layout>
          {/* Add routing for Dashboard and Profile */}
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/home" element={<Dashboard />} />

            <Route
              path="/"
              element={
                <div className="rounded-lg bg-white dark:bg-gray-800 shadow p-4">
                  <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Dashboard
                  </h1>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Welcome to your dashboard
                  </p>
                </div>
              }
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </DarkModeProvider>
  );
}

export default App;
