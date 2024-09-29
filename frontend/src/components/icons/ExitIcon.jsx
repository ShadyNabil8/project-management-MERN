import React from "react";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

const ExitIcon = ({ customStyle, onClick }) => {
  return (
    <button
      className="rounded-md p-1 hover:bg-hover-color-light-1 dark:hover:bg-hover-color-dark-1"
      onClick={onClick}
    >
      <IoMdClose
        className={clsx(
          customStyle,
          "text-text-color-light-lite dark:text-text-color-dark-lite",
        )}
      />
    </button>
  );
};

export default ExitIcon;
