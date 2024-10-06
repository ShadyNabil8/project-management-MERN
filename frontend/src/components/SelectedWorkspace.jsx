import React from "react";
import Option from "./Option";
import Workspace from "./Workspace";
import { useNavigate, useParams } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import { useAuth } from "../context/AuthContext";

const SelectedWorkspace = () => {
  const { workspaceId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const workspace = user.workspaces.find(
    (workspace) => workspace._id === workspaceId,
  );

  return (
    <div className="mb-2 flex flex-col justify-center border-b border-gray-200 pb-2 dark:border-border-color-dark">
      <div className="pointer-events-none">
        {workspace && <Workspace workspace={workspace}></Workspace>}
      </div>
      {workspace.owner === user._id && (
        <div className="mt-1">
          <Option
            title="Settings"
            image=<IoSettingsOutline />
            action={() => navigate(`${workspaceId}/settings`)}
          />
          <Option title="Manage users" image=<LuUsers2 /> />
        </div>
      )}
    </div>
  );
};

export default SelectedWorkspace;
