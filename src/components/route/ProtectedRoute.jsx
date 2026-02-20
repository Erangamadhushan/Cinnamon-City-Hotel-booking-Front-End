import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = ({ element, role }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-gray-600 min-h-screen flex justify-center items-center"><div className="text-xl md:text-3xl text-purple-600 font-bold">Loading...</div></div>;
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return element;
};

export default ProtectedRoute;
