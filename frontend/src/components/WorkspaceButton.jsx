import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { fetchWorkspace } from "../api";
import { BASE_URL } from "../api/api";

const WorkspaceButton = ({ onClick }) => {
  const { workspaceId } = useParams();
  const { data: workspace, isLoading } = useFetchData(
    ["workspaces", workspaceId],
    () => fetchWorkspace(workspaceId),
  );

  return (
    <div
      className="flex h-full w-full items-center justify-center gap-[2px] hover:bg-gray-200 lg:w-[80%] lg:justify-between lg:gap-0 lg:rounded-md lg:p-1"
      onClick={() => onClick()}
    >
      <div className="flex h-full items-center justify-center">
        <span className="shrink-0">
          <img
            className="size-5 rounded-[4px]"
            src={`${BASE_URL}/${workspace?.image}`}
          ></img>
        </span>
        <div className="hidden h-full lg:block">
          <span className="ml-3 line-clamp-1 break-all">{workspace?.name}</span>
        </div>
      </div>
      <IoIosArrowDown className="text-[10px] text-gray-600 lg:text-base" />
    </div>
  );
};

export default WorkspaceButton;
