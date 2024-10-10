import React from "react";
import TaskStatus from "./TaskStatus";
import AddedTaskStatus from "./AddedTaskStatus";
import ProgressStatus from "./ProgressStatus";
import DotsIcon from "./icons/DotsIcon";
import { HiOutlinePlusSm } from "react-icons/hi";
import DownArrowIcon from "./icons/DownArrowIcon";

const TasksCollection = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <DownArrowIcon customStyle="lite-text-color" />
        <ProgressStatus name="In progress" color="#616EE2" />
        <span className="lite-text-color text-sm">7</span>
        <DotsIcon customStyle="lite-text-color" />
        <button className="lite-text-color my-hover flex items-center gap-1 rounded-[4px] px-[6px] py-1 text-sm">
          <HiOutlinePlusSm className="shrink-0 text-lg" />
          <span>Add Task</span>
        </button>
      </div>
    </div>
  );
};

export default TasksCollection;
