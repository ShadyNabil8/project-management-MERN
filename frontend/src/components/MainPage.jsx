import React, { useEffect } from "react";
import Sidebar from ".//Sidebar";
import { useQuery } from "@tanstack/react-query";
import MainLoading from "./MainLoading";
import { fetchWorkspaces } from "../api";
import { useWorkspace } from "../context/WorkspaceContext";

const MainPage = () => {
  const { currentWorkspace, setCurrentWorkspace } = useWorkspace();

  const { data: workspaces, isFetched } = useQuery({
    queryKey: ["workspaces"],
    queryFn: fetchWorkspaces,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isFetched) {
      setCurrentWorkspace(workspaces[0]);
    }
  }, [isFetched]);

  if (!currentWorkspace) {
    return <MainLoading></MainLoading>;
  }
  return (
    <div>
      <Sidebar workspaces={workspaces}></Sidebar>
    </div>
  );
};

export default MainPage;
