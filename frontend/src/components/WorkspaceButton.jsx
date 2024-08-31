import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const WorkspaceButton = ({ onClick }) => {
  const { workspaceId } = useParams();

  const { data: workspace } = useQuery({
    queryKey: ["workspace", workspaceId],
    queryFn: () => fetchWorkspace(workspaceId),
  });

  return (
    <div
      className="flex items-center justify-between rounded-md p-2 hover:bg-gray-200"
      onClick={() => onClick()}
    >
      <div className="flex items-center">
        <img src={workspace?.image} className="size-6 rounded-md"></img>
        <span className="ml-3 line-clamp-1 break-all">{workspace?.title}</span>
      </div>
      <IoIosArrowDown className="text-gray-600" />
    </div>
  );
};

export default WorkspaceButton;
