import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useWorkspace } from "../context/WorkspaceContext";

const WorkspaceButton = ({ onClick }) => {
  const { currentWorkspace } = useWorkspace();

  return (
    <div
      className="flex items-center justify-between rounded-md  p-2 hover:bg-gray-200"
      onClick={() => onClick()}
    >
      <div className="flex items-center">
        <img src={currentWorkspace.image} className="size-6 rounded-md"></img>
        <span className="ml-3 line-clamp-1 break-all">
          {currentWorkspace.title}
        </span>
      </div>
      <IoIosArrowDown className="text-gray-600" />
    </div>
  );
};

export default WorkspaceButton;
