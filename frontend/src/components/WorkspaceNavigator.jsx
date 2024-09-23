import React, { useState } from "react";
import WorkspaceButton from "./WorkspaceButton";
import WorkspacePanel from "./WorkspacePanel";
import { useAuth } from "../context/AuthContext";

const WorkspaceNavigator = () => {
  const [isWorkspacePanelVisible, setIsWorkspacePanelVisible] = useState(false);
  const { user } = useAuth();
  const workspaces = user.workspaces;
  return (
    <div className="dark:bg-bg-color-dark-2 dark:border-border-color-dark flex h-full w-full items-center justify-center border-b border-r bg-[#F7F8F9] lg:justify-between lg:p-2">
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
