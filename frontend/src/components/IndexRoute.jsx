import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import MainLoading from "./MainLoading";
import api from "../api/api";

const IndexRoute = () => {
  const [loading, setLoading] = useState(true);
  const [initialWorkspaceId, setInitialWorkspaceId] = useState(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const params = useParams();

  const { token, user } = isAuthenticated();

  useEffect(() => {
    const getUserWorkspaces = async () => {
      try {
        const response = await api.get("/workspaces");
        return response.data.workspacesDocuments;
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    const suitableRoute = async () => {
      try {
        setLoading(true);
        if (token && user) {
          if (!user.isVerified) {
            return navigate("/verify-email");
          }

          const userWorkspaces = await getUserWorkspaces();
          if (!userWorkspaces.length) {
            return navigate("/workspace-setup");
          }

          if (!params.hasOwnProperty("workspaceId")) {
            setInitialWorkspaceId(userWorkspaces[0]._id);
          } else {
            // I need to check if the user is a member of this ws or not!
            setInitialWorkspaceId(params.workspaceId);
          }
        } else {
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    suitableRoute();
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
