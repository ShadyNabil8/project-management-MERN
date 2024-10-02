import React from "react";
import Option from "./Option";
import Workspace from "./Workspace";
import { useParams } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import { useAuth } from "../context/AuthContext";

const options = [
  {
    title: "setting",
    image: <IoSettingsOutline />,
  },
  {
    title: "Manage users",
    image: <LuUsers2 />,
  },
];

const SelectedWorkspace = () => {
  const { workspaceId } = useParams();
  const { user } = useAuth();

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
          {options.map((option, index) => (
            <Option key={index} option={option}></Option>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedWorkspace;
