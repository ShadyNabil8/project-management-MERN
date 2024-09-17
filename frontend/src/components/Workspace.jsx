import React from "react";
import { Link } from "react-router-dom";
import { IMAGES_ROUTE } from "../api/api";

const Workspace = ({ workspace, toggleList }) => {
  return (
    <Link
      reloadDocument
      to={`/${workspace._id}/home`}
      className="flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-200"
      onClick={() => toggleList()}
    >
      <span className="shrink-0">
        <img
          className="size-7 rounded-md"
          src={`${IMAGES_ROUTE}/${workspace.image}`}
        ></img>
      </span>
      <div className="ml-4 flex flex-col justify-center">
        <span className="line-clamp-1 break-all text-sm">{workspace.name}</span>
        <span className="text-xs">{workspace.members.length} members</span>
      </div>
    </Link>
  );
};

export default Workspace;
