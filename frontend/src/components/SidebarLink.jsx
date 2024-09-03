import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "./Thumbnail";

const SidebarLink = ({ link }) => {
  return (
    <Link
      to={link.to}
      className="flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-200"
    >
      <Thumbnail image={link?.image} size={18} isRounded={false} />
      <span className="ml-3 text-sm text-gray-800">{link.title}</span>
    </Link>
  );
};

export default SidebarLink;
