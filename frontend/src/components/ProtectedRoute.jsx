import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const { token, user } = isAuthenticated();

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
