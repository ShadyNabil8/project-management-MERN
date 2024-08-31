import React, { useState } from "react";
import WorkspaceButton from "./WorkspaceButton";
import SelectedWorkspace from "./SelectedWorkspace";
import WorkspaceList from "./WorkspaceList";
import Workspace from "./Workspace";
import Option from "./Option";
import { addImage } from "../assets/images";
import { useQuery } from "@tanstack/react-query";
import { fetchWorkspaces } from "../api";
import { useParams } from "react-router-dom";
const WorkspaceNavigator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { workspaceId } = useParams();

  const { data: workspaces } = useQuery({
    queryKey: ["workspaces"],
    queryFn: fetchWorkspaces,
  });

  const toggleList = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="relative border-b">
      <WorkspaceButton onClick={toggleList}></WorkspaceButton>
      <div
        className={`absolute inset-x-0 mt-3 rounded-md bg-white p-3 shadow-3xl ${isVisible ? "block" : "hidden"}`}
      >
        <SelectedWorkspace></SelectedWorkspace>
        <WorkspaceList>
          {workspaces?.map((workspace, index) =>
            workspace.id !== workspaceId ? (
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
