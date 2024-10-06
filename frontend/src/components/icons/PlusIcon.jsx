import clsx from "clsx";
import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

const PlusIcon = ({ customStyle, onClick }) => {
  return (
    <button
      className="dark:hover:bg-hover-color-dark-2 rounded-md p-1 hover:bg-hover-color-light-2"
      onClick={onClick}
    >
      <HiOutlinePlusSm className={clsx(customStyle)} />
    </button>
  );
};

export default PlusIcon;
