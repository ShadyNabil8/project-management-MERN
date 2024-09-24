import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ link }) => {
  return (
    <Link
      to={link.to}
      className="flex w-full cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-200 lg:justify-start dark:hover:bg-hover-color-dark-1"
    >
      <span className="text-text-color-light-lite size-5 shrink-0 dark:text-text-color-dark">
        {link.image}
      </span>
      <span className="text-text-color-light ml-3 hidden text-sm lg:block dark:text-text-color-dark">
        {link.title}
      </span>
    </Link>
  );
};

export default SidebarLink;
