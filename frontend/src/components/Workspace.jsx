import React from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
const Workspace = ({ workspace, toggleList }) => {
  return (
    <Link
      reloadDocument
      to={`/${workspace._id}/home`}
      className="flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-200"
      onClick={() => toggleList()}
    >
      <Avatar
        name={workspace.name}
        color="#B2E0E0"
        fgColor="#3D5456"
        round="5px"
        size="30px"
        maxInitials={1}
        textSizeRatio={2}
      />
      <div className="ml-4 flex flex-col justify-center">
        <span className="line-clamp-1 break-all text-sm">{workspace.name}</span>
        <span className="text-xs">{workspace.members.length} members</span>
      </div>
    </Link>
  );
};

export default Workspace;
