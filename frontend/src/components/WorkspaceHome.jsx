import React from "react";

const WorkspaceHome = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute-center absolute flex w-full flex-col items-center">
        <p className="normal-text-color text-[50px]">Workspace Home.</p>
        <p className="normal-text-color text-[50px]">
          This page can contain all tasks assigned to me and recent visited
          sections for example.
        </p>
      </div>
    </div>
  );
};

export default WorkspaceHome;
