import React from "react";
import { useWorkspace } from "../context/WorkspaceContext";

const Workspace = ({ workspace, toggleList }) => {
  const { setCurrentWorkspace } = useWorkspace();

  const handleSelect = (e) => {
    setCurrentWorkspace(workspace);
    toggleList();
  };

  return (
    <div
      className="flex cursor-pointer rounded-md p-2 hover:bg-gray-200"
      onClick={handleSelect}
    >
      <span className="flex shrink-0 items-center">
        <img src={workspace.image} className="size-8 rounded-md"></img>
      </span>
      <div className="ml-4 flex flex-col justify-center">
        <span className="line-clamp-1 break-all text-sm">
          {workspace.title}
        </span>
        <span className="text-xs">{workspace.members} members</span>
      </div>
    </div>
  );
};

export default Workspace;
