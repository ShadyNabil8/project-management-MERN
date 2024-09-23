import React, { useState } from "react";
import WorkspaceButton from "./WorkspaceButton";
import useFetchData from "../hooks/useFetchData";
import { fetchWorkspaces } from "../api";
import WorkspacePanel from "./WorkspacePanel";

const WorkspaceNavigator = () => {
  const [isWorkspacePanelVisible, setIsWorkspacePanelVisible] = useState(false);
  const { data: workspaces } = useFetchData({
    queryKey: ["workspaces"],
    queryFn: fetchWorkspaces,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return (
    <div className="flex h-full w-full items-center justify-center border-b border-r bg-[#F7F8F9] lg:justify-between lg:p-2">
      <WorkspaceButton
        onClick={() => setIsWorkspacePanelVisible((prev) => !prev)}
      ></WorkspaceButton>
      {isWorkspacePanelVisible && (
        <WorkspacePanel
          workspaces={workspaces}
          setIsPanelVisible={setIsWorkspacePanelVisible}
        />
      )}
    </div>
  );
};

export default WorkspaceNavigator;
