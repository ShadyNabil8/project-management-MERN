import React from "react";

const Option = ({ option }) => {
  return (
    <div className="flex cursor-pointer items-center rounded-md px-2 py-1 hover:bg-gray-200">
      <span className="shrink-0">
        <img className="size-4 rounded-md" src={option.image}></img>
      </span>
      <span className="ml-3 text-gray-800">{option.title}</span>
    </div>
  );
};

export default Option;
