import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ title, image, to }) => {
  return (
    <Link
      to={to}
      className="flex w-full cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-200 lg:justify-start dark:hover:bg-hover-color-dark-1"
    >
      <span className="size-5 shrink-0 text-text-color-light-lite dark:text-text-color-dark">
        {image}
      </span>
      <span className="ml-3 hidden text-sm text-text-color-light lg:block dark:text-text-color-dark">
        {title}
      </span>
    </Link>
  );
};

export default SidebarLink;
