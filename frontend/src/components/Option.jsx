import React from "react";
import Thumbnail from "./Thumbnail";

const Option = ({ option }) => {
  return (
    <div className="flex cursor-pointer items-center rounded-md px-2 py-1 hover:bg-gray-200">
      <Thumbnail image={option.image} />
      <span className="ml-3 text-gray-800">{option.title}</span>
    </div>
  );
};

export default Option;
