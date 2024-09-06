import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { fetchWorkspace } from "../api";
import Thumbnail from "./Thumbnail";
import { BASE_URL } from "../api/api";

const WorkspaceButton = ({ onClick }) => {
  const { workspaceId } = useParams();
  const { data: workspace, isLoading } = useFetchData(
    ["workspaces", workspaceId],
    () => fetchWorkspace(workspaceId),
  );

  return (
    <div
      className="flex w-[70%] items-center justify-between rounded-md p-1 hover:bg-gray-200"
      onClick={() => onClick()}
    >
      <div className="flex items-center">
        <Thumbnail image={`${BASE_URL}/${workspace?.image}`} size={6}/>
        <span className="ml-3 line-clamp-1 break-all">{workspace?.name}</span>
      </div>
      <IoIosArrowDown className="text-gray-600" />
    </div>
  );
};

export default WorkspaceButton;
