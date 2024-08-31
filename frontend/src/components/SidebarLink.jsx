import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ link }) => {
  return (
    <Link
      to={link.to}
      className="flex cursor-pointer items-center rounded-md px-4 py-2 hover:bg-gray-200"
    >
      <span className="text-gray-600">
        <img src={link.image || null} className="size-5"></img>
      </span>
      <span className="ml-3 text-gray-800">{link.title}</span>
    </Link>
  );
};

export default SidebarLink;
