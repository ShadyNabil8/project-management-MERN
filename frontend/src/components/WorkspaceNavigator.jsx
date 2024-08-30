import React, { useState } from "react";
import WorkspaceButton from "./WorkspaceButton";
import SelectedWorkspace from "./SelectedWorkspace";
import WorkspaceList from "./WorkspaceList";
import Workspace from "./Workspace";
import Option from "./Option";
import { useWorkspace } from "../context/WorkspaceContext";
import { addImage } from "../assets/images";
const WorkspaceNavigator = ({ workspaces }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentWorkspace } = useWorkspace();

  const toggleList = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="relative border-b">
      <WorkspaceButton onClick={toggleList}></WorkspaceButton>
      <div
        className={`absolute inset-x-0 mt-3 rounded-md bg-white p-3 shadow-3xl ${isVisible ? "block" : "hidden"}`}
      >
        <SelectedWorkspace workspace={currentWorkspace}></SelectedWorkspace>
        <WorkspaceList>
          {workspaces.map((workspace, index) =>
            workspace.id !== currentWorkspace.id ? (
              <Workspace
                key={index}
                workspace={workspace}
                toggleList={toggleList}
              ></Workspace>
            ) : null,
          )}
        </WorkspaceList>
        <Option option={{ image: addImage, title: "New Workspace" }}></Option>
      </div>
    </div>
  );
};

export default WorkspaceNavigator;
