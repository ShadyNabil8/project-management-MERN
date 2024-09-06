import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "./Thumbnail";
import {BASE_URL} from '../api/api'

const Workspace = ({ workspace, toggleList }) => {
  return (
    <Link
      reloadDocument
      to={`/${workspace._id}/home`}
      className="flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-200"
      onClick={() => toggleList()}
    >
      <Thumbnail image={`${BASE_URL}/${workspace.image}`} size={8} />
      <div className="ml-4 flex flex-col justify-center">
        <span className="line-clamp-1 break-all text-sm">{workspace.name}</span>
        <span className="text-xs">{workspace.members.length} members</span>
      </div>
    </Link>
  );
};

export default Workspace;
