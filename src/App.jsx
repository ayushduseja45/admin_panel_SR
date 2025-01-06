import "./App.css";
import Layout from "./Component/Layout";
import Login from "./Component/AuthPages/Login";
import Register from "./Component/AuthPages/Register";
import { DarkModeProvider } from "./Context/ContextProvider";
import { AuthProvider } from "./Component/AuthPages/authContext/AuthContext.jsx";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Component/AuthPages/ProtectedRoute.jsx";
import Profile from "./Component/Profilr.jsx";
import Dashboard from "./Component/Dashboard";
import UsersPage from "./Component/User/UserPage";
import LoanApplicants from "./Component/LoanApplicants/LoanApplicants";

function App() {
  return (
    <AuthProvider>
      <DarkModeProvider>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protect routes that require authentication */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <UsersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <div className="rounded-lg bg-white dark:bg-gray-800 shadow p-4">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Dashboard
                    </h1>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Welcome to your dashboard
                    </p>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </DarkModeProvider>
    </AuthProvider>
  );
}

export default App;
