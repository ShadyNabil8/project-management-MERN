import React from "react";
import { Outlet } from "react-router-dom";

const isAuthenticated = true;
const ProtectedRoute = () => {
  if (isAuthenticated) return <div>{Outlet}</div>;
};

export default ProtectedRoute;
