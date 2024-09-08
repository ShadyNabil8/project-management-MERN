import React, { useState } from "react";
import WorkspaceButton from "./WorkspaceButton";
import SelectedWorkspace from "./SelectedWorkspace";
import WorkspaceList from "./WorkspaceList";
import Workspace from "./Workspace";
import Option from "./Option";
import { addImage } from "../assets/images";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { fetchWorkspaces } from "../api";
import { IoAdd } from "react-icons/io5";

const WorkspaceNavigator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { workspaceId } = useParams();
  const { data: workspaces, isLoading } = useFetchData(
    ["workspaces"],
    fetchWorkspaces,
  );

  const toggleList = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="flex h-full w-full items-center justify-center border-b border-r bg-[#F7F8F9] lg:justify-between lg:p-2">
      <WorkspaceButton onClick={toggleList}></WorkspaceButton>
      <div
        className={`absolute left-3 top-11 z-10 mt-3 min-w-64 rounded-md bg-white p-2 shadow-3xl ${isVisible ? "block" : "hidden"}`}
      >
        <SelectedWorkspace></SelectedWorkspace>
        <WorkspaceList>
          {workspaces?.map((workspace, index) =>
            workspace._id !== workspaceId ? (
              <Workspace
                key={index}
                workspace={workspace}
                toggleList={toggleList}
              ></Workspace>
            ) : null,
          )}
        </WorkspaceList>
        <Option option={{ image: <IoAdd />, title: "New Workspace" }}></Option>
      </div>
    </div>
  );
};

export default WorkspaceNavigator;
