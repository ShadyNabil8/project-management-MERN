import React from "react";

const WorkspaceList = ({ children }) => {
  return (
    <div className="mb-10 flex w-full flex-col items-start">
      <span className="mb-5 block text-xs font-bold uppercase text-text-color-light">
        Switch Workspaces
      </span>
      <div className="flex max-h-72 w-full flex-col gap-3 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default WorkspaceList;
