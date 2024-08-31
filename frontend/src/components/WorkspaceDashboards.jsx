import React from "react";
import { useParams } from "react-router-dom";

const WorkspaceDashboards = () => {
  const { workspaceId } = useParams();
  return <div>{`This is the dashboards of workspace${workspaceId}`}</div>;
};

export default WorkspaceDashboards;
