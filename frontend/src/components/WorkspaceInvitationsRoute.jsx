import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const WorkspaceInvitationsRoute = () => {
  const { workspaceId, spaceId, listId } = useParams();
  const { user } = useAuth();

  if (user.workspaceInvitations.length) {
    return <Navigate to="/join-team" />;
  }
  
  return <Outlet />;
};

export default WorkspaceInvitationsRoute;
