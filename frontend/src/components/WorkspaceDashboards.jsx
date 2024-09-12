import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api, { GET_USER_ROUTE } from "../api/api";

const WorkspaceDashboards = () => {
  const { workspaceId } = useParams();

  // For testing
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await api.get(GET_USER_ROUTE);
        console.log(response);
      } catch (error) {
      } finally {
      }
    };
    fetchMe();
  });

  return <div>{`This is the dashboards of workspace${workspaceId}`}</div>;
};

export default WorkspaceDashboards;
