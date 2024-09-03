import React from "react";
import Option from "./Option";
import Workspace from "./Workspace";
import { settingsImage, userImage } from "../assets/images";
import { fetchWorkspace } from "../api";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useFetchData from "../hooks/useFetchData";

const options = [
  {
    title: "setting",
    image: settingsImage,
  },
  {
    title: "Manage users",
    image: userImage,
  },
];

const SelectedWorkspace = () => {
  const { workspaceId } = useParams();
  const { data: workspace, isLoading } = useFetchData(
    ["workspaces", workspaceId],
    () => fetchWorkspace(workspaceId),
  );

  return (
    <div className="mb-2 flex flex-col justify-center border-b border-gray-200 pb-2">
      <div className="pointer-events-none">
        {workspace && <Workspace workspace={workspace}></Workspace>}
      </div>
      <div className="mt-3">
        {options.map((option, index) => (
          <Option key={index} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default SelectedWorkspace;
