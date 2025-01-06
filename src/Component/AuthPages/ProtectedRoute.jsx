import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthPages/authContext/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // If the user is not logged in, redirect to login
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
