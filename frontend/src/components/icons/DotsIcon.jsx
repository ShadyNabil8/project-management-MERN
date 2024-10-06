import clsx from "clsx";
import React from "react";
import { TbDots } from "react-icons/tb";

const DotsIcon = ({ customStyle, onClick }) => {
  return (
    <button
      className="dark:hover:bg-hover-color-dark-2 rounded-md p-1 hover:bg-hover-color-light-2"
      onClick={onClick}
    >
      <TbDots className={clsx(customStyle)} />
    </button>
  );
};

export default DotsIcon;
