import React from "react";

const Option = ({ option }) => {
  return (
    <div className="flex cursor-pointer items-center rounded-md px-2 py-1 hover:bg-gray-200">
      <span className="shrink-0">
        {option.image}
      </span>
      <span className="ml-3 text-[14px] text-gray-800">{option.title}</span>
    </div>
  );
};

export default Option;
