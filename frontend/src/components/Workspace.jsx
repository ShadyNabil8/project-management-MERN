import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const Workspace = ({ workspace }) => {
  return (
    <Link
      reloadDocument
      to={`/${workspace._id}/home`}
      className="flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-200"
    >
      <Avatar
        name={workspace.name}
        fontSize="18px"
        size="30px"
        backgroundColor="#B2E0E0"
        textColor="#3D5456"
        round="5px"
      />
      <div className="ml-4 flex flex-col justify-center dark:text-text-color-dark">
        <span className="line-clamp-1 break-all text-sm font-semibold">
          {workspace.name}
        </span>
        <span className="text-xs">{workspace.members.length} members</span>
      </div>
    </Link>
  );
};

export default Workspace;
