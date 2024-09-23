import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { useAuth } from "../context/AuthContext";

const WorkspaceButton = ({ onClick }) => {
  const { workspaceId } = useParams();
  const { user } = useAuth();

  const workspace = user.workspaces.find(
    (workspace) => workspace._id === workspaceId,
  );

  return (
    <div
      className="dark:hover:bg-hover-color-dark-1 flex h-full w-full items-center justify-center gap-[2px] hover:bg-gray-200 lg:w-[80%] lg:justify-between lg:gap-0 lg:rounded-md lg:p-1"
      onClick={() => onClick()}
    >
      <button className="flex h-full items-center justify-center">
        <Avatar
          name={workspace.name}
          fontSize="14px"
          size="25px"
          backgroundColor="#B2E0E0"
          textColor="#3D5456"
          round="5px"
        />
        <div className="hidden h-full lg:block">
          <span className="dark:text-text-color-dark ml-1 line-clamp-1 break-all font-bold text-gray-800">
            {workspace.name}
          </span>
        </div>
      </button>
      <IoIosArrowDown className="dark:text-text-color-dark text-[10px] text-gray-600 lg:text-base" />
    </div>
  );
};

export default WorkspaceButton;
