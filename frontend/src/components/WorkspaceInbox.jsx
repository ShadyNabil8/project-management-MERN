import React from "react";
import { useParams } from "react-router-dom";

const WorkspaceInbox = () => {
  const { workspaceId } = useParams();
  return <div>{`This is the inbox of workspace${workspaceId}`}</div>;
};

export default WorkspaceInbox;
