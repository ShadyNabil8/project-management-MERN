import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { fetchWorkspaces } from "../api";
import MainLoading from "./MainLoading";

const IndexRoute = () => {
  const [loading, setLoading] = useState(true);
  const [initialWorkspaceId, setInitialWorkspaceId] = useState(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const params = useParams();

  const { token, user } = isAuthenticated();

  useEffect(() => {
    const getUserDefaultWorkspace = async () => {
      try {
        setLoading(true);
        const response = await fetchWorkspaces();
        setInitialWorkspaceId(response[0]._id);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    if (token && user) {
      if (!user.isVerified) {
        navigate("/signup/validate-email");
      }

      if (!params.hasOwnProperty("workspaceId")) {
        getUserDefaultWorkspace();
      } else {
        // I need to check if the user is a member of this ws or not!
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

  return token ? (
    <Navigate to={`/${initialWorkspaceId}/home`} />
  ) : (
    <Navigate to="/login" />
  );
};

export default IndexRoute;
