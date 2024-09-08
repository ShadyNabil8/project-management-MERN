import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ link }) => {
  return (
    <Link
      to={link.to}
      className="flex cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-200"
    >
      <span className="shrink-0">{link.image}</span>
      <span className="ml-3 hidden text-sm text-gray-800 lg:block">
        {link.title}
      </span>
    </Link>
  );
};

export default SidebarLink;
