import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const IndexRoute = () => {
  const [loading, setLoading] = useState(true);
  const [initialWorkspaceId, setInitialWorkspaceId] = useState(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const params = useParams();

  const { token, user } = isAuthenticated();

  useEffect(() => {
    const suitableRoute = async () => {
      try {
        setLoading(true);
        if (token && user) {
          if (!user.isVerified) {
            return navigate("/verify-email");
          }
          console.log(user);

          // Means that user has no workspaces yet.
          if (!user.workspaces.length) {
            return navigate("/workspace-setup");
          }

          // Means that user has invitaions to join workspace
          if (user.workspaceInvitations.length > 0) {
            return navigate("/join-team");
          }

          if (!params.hasOwnProperty("workspaceId")) {
            setInitialWorkspaceId(user.workspaces[0]._id);
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
    return <></>;
  }

  return token ? (
    <Navigate to={`/${initialWorkspaceId}/home`} />
  ) : (
    <Navigate to="/login" />
  );
};

export default IndexRoute;
