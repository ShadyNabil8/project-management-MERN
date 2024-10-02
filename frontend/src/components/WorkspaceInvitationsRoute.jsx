import React from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const WorkspaceInvitationsRoute = () => {
  const { workspaceId, spaceId, listId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  // check if this is a valid workspaces id.
  const workspaceExists = user.workspaces.some(
    (workspace) => workspace._id === workspaceId,
  );
  if (!workspaceExists) return <Navigate to="/not-found-team" />;

  if (user.workspaceInvitations.length) {
    return <Navigate to="/join-team" />;
  }

  return <Outlet />;
};

export default WorkspaceInvitationsRoute;
