import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useParams } from "react-router-dom";
import { fetchWorkspaces } from "../api";
import MainLoading from "./MainLoading";

const IndexRoute = () => {
  const [loading, setLoading] = useState(true);
  const [initialWorkspaceId, setInitialWorkspaceId] = useState(null);
  const { isAuthenticated } = useAuth();
  const params = useParams();

  const user = isAuthenticated();

  useEffect(() => {
    const getUserDefaultWorkspace = async (user) => {
      try {
        setLoading(true);
        const response = await fetchWorkspaces();
        setInitialWorkspaceId(response[0]._id);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      if (!params.hasOwnProperty("workspaceId")) {
        getUserDefaultWorkspace();
      } else {
        setInitialWorkspaceId(params.workspaceId);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <MainLoading />;
  }

  return user ? (
    <Navigate to={`/${initialWorkspaceId}/home`} />
  ) : (
    <Navigate to="/login" />
  );
};

export default IndexRoute;
