import React from "react";

const Option = ({ option }) => {
  return (
    <div
      className="flex w-full cursor-pointer items-center gap-1 rounded-md px-2 py-1 hover:bg-gray-200 dark:hover:bg-hover-color-dark-1"
      onClick={option?.action ? option.action : null}
    >
      <span className="shrink-0 text-lg text-[#6b6b6b] dark:text-text-color-dark">
        {option.image}
      </span>
      <span className="ml-3 text-[15px] text-text-color-light dark:text-text-color-dark">
        {option.title}
      </span>
    </div>
  );
};

export default Option;
