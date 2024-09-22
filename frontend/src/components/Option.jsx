import React from "react";

const Option = ({ option }) => {
  return (
    <div
      className="flex cursor-pointer items-center rounded-md px-2 py-1 hover:bg-gray-200"
      onClick={option?.action ? option.action : null}
    >
      <span className="shrink-0 text-lg text-[#6b6b6b]">{option.image}</span>
      <span className="ml-3 text-[15px] text-gray-800">{option.title}</span>
    </div>
  );
};

export default Option;
