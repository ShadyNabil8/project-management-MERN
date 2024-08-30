import React from "react";

const Option = ({ option }) => {
  return (
    <div className="flex cursor-pointer items-center rounded-md px-4 py-2 hover:bg-gray-200">
      <span className="text-gray-600">
        <img src={option.image || null} className="size-5"></img>
      </span>
      <span className="ml-3 text-gray-800">{option.title}</span>
    </div>
  );
};

export default Option;
