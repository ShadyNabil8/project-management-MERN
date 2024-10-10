import clsx from "clsx";
import React from "react";
import AddedTaskColor from "./AddedTaskColor";

const ProgressStatus = ({ name, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex w-fit items-center gap-3 rounded-[4px] px-2 py-[1px]"
    >
      <AddedTaskColor color={"#FFFFFF"} size="8px" />
      <span className="text-[15px] text-white">{name}</span>
    </div>
  );
};

export default ProgressStatus;
