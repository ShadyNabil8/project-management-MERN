import React from "react";
import ColorCircle from "./ColorCircle";

const TaskStatus = ({ status }) => {
  return (
    <div className="flex items-center gap-2">
      <ColorCircle colorCode={status.color} isSelected={true} size={"7px"} />
      <span className="lite-text-color text-sm">{status.name}</span>
    </div>
  );
};

export default TaskStatus;
