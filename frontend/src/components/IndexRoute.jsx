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
    const getUserDefaultWorkspace = async () => {
      try {
        setLoading(true);
        const response = await fetchWorkspaces();
        console.log('HERE 2');
        console.log('HERE 3', response[0]._id);
        setInitialWorkspaceId(response[0]._id);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    if (user) {
      console.log('HERE 1');
      
      if (!params.hasOwnProperty("workspaceId")) {
        console.log('HERE 5');
        getUserDefaultWorkspace();
      } else {
        console.log('HERE 4');
        setInitialWorkspaceId(params.workspaceId);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  });

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
