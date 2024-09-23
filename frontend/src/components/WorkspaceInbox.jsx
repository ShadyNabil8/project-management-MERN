import React from "react";
import { useParams } from "react-router-dom";

const WorkspaceInbox = () => {
  const { workspaceId } = useParams();
  return (
    <div className="dark:bg-bg-color-dark-1">{`This is the inbox of workspace${workspaceId}`}</div>
  );
};

export default WorkspaceInbox;
