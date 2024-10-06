import React from "react";

const Option = ({ image, title, action }) => {
  const handleClick = () => {
    if (action) {
      action();
    } else {
      console.warn("No action defined for this option.");
    }
  };
  return (
    <div
      className="flex w-full cursor-pointer items-center gap-1 rounded-md px-2 py-1 hover:bg-gray-200 dark:hover:bg-hover-color-dark-1"
      onClick={handleClick}
    >
      <span className="shrink-0 text-lg text-[#6b6b6b] dark:text-text-color-dark">
        {image}
      </span>
      <span className="ml-3 text-[15px] text-text-color-light dark:text-text-color-dark">
        {title}
      </span>
    </div>
  );
};

export default Option;
