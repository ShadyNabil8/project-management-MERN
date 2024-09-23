import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ link }) => {
  return (
    <Link
      to={link.to}
      className="dark:hover:bg-hover-color-dark-1 flex w-full cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-200 lg:justify-start"
    >
      <span className="dark:text-text-color-dark size-5 shrink-0 text-gray-600">
        {link.image}
      </span>
      <span className="dark:text-text-color-dark ml-3 hidden text-sm font-medium text-gray-800 lg:block">
        {link.title}
      </span>
    </Link>
  );
};

export default SidebarLink;
