import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useParams } from "react-router-dom";

const IndexRoute = () => {
  const { isAuthenticated } = useAuth();
  const params = useParams();

  const user = isAuthenticated();

  const getUserDefaultWorkspace = (user) => {
    
    return user.workspaces[0];
  };

  return user ? (
    <Navigate
      to={`/${params.hasOwnProperty("workspaceId") ? params.workspaceId : getUserDefaultWorkspace(user)}/home`}
    />
  ) : (
    <Navigate to="/login" />
  );
};

export default IndexRoute;
