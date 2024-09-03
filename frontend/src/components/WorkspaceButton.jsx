import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { fetchWorkspace } from "../api";
import Thumbnail from "./Thumbnail";

const WorkspaceButton = ({ onClick }) => {
  const { workspaceId } = useParams();
  const { data: workspace, isLoading } = useFetchData(
    ["workspaces", workspaceId],
    () => fetchWorkspace(workspaceId),
  );

  return (
    <div
      className="flex max-w-[70%] items-center justify-between rounded-md p-1 hover:bg-gray-200"
      onClick={() => onClick()}
    >
      <div className="flex items-center">
        <Thumbnail image={workspace?.image} size={6}/>
        <span className="ml-3 line-clamp-1 break-all">{workspace?.title}</span>
      </div>
      <IoIosArrowDown className="text-gray-600" />
    </div>
  );
};

export default WorkspaceButton;
