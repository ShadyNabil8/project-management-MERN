import React from "react";
import { useParams } from "react-router-dom";

const WorkspaceDashboards = () => {
  const { workspaceId } = useParams();

  return (
    <div className="dark:bg-bg-color-dark-1">{`This is the dashboards of workspace${workspaceId}`}</div>
  );
};

export default WorkspaceDashboards;
