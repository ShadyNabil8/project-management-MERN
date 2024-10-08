import React, { useState } from "react";
import OptionsContainer from "./OptionsContainer";
import LeftArrow from "./icons/LeftArrow";
import TaskStatusCollection from "./TaskStatusCollection";

const TaskStatusesSetup = ({
  spaceName,
  setIsPanelVisible,
  taskStatuses,
  setTaskStatuses,
  setIsTaskStatusesVisible,
}) => {
  const [tempTaskStatuses, setTempTaskStatuses] = useState(taskStatuses);
  const [changedOccurred, setChangedOccurred] = useState(false);

  const handleOnApplyChanges = () => {
    setTaskStatuses(tempTaskStatuses);
    setIsTaskStatusesVisible(false);
  };

  return (
    <OptionsContainer
      customStyle="fixed above-center grid grid-cols-[40%,auto] grid-rows-[60px,auto,60px] w-full sm:w-[580px] h-[640px]"
      setIsPanelVisible={setIsPanelVisible}
      darkBackground={true}
    >
      <div className="col-span-2 border-b dark:border-border-color-dark">
        <div className="flex items-center gap-4 p-4 text-xl font-bold text-text-color-light dark:text-text-color-dark">
          <button className="my-hover rounded-md p-1">
            <LeftArrow
              customStyle="text-text-color-light dark:text-text-color-dark"
              onClick={() => setIsTaskStatusesVisible(false)}
            />
          </button>
          <span>{`Edit ${spaceName} statuses`}</span>
        </div>
      </div>
      <div className="border-r dark:border-r-border-color-dark"></div>
      <div className="flex flex-col gap-3 overflow-y-auto overflow-x-hidden px-5 py-3">
        <TaskStatusCollection
          taskStatusTitle="Not Started"
          taskStatusName="notStarted"
          tempTaskStatuses={tempTaskStatuses}
          setTempTaskStatuses={setTempTaskStatuses}
          setChangedOccurred={setChangedOccurred}
        />
        <TaskStatusCollection
          taskStatusTitle="Active"
          taskStatusName="active"
          tempTaskStatuses={tempTaskStatuses}
          setTempTaskStatuses={setTempTaskStatuses}
          setChangedOccurred={setChangedOccurred}
        />
        <TaskStatusCollection
          taskStatusTitle="Done"
          taskStatusName="done"
          tempTaskStatuses={tempTaskStatuses}
          setTempTaskStatuses={setTempTaskStatuses}
          setChangedOccurred={setChangedOccurred}
        />
        <TaskStatusCollection
          taskStatusTitle="Closed"
          taskStatusName="closed"
          tempTaskStatuses={tempTaskStatuses}
          setTempTaskStatuses={setTempTaskStatuses}
          setChangedOccurred={setChangedOccurred}
        />
      </div>
      <div className="col-span-2 flex flex-row-reverse border-t p-3 dark:border-border-color-dark">
        <button
          disabled={!changedOccurred}
          style={{
            opacity: changedOccurred ? "1" : "0.2",
            cursor: changedOccurred ? "pointer" : "not-allowed",
          }}
          className="flex items-center gap-x-1 rounded-md bg-[#1090E0] px-2 py-[2px]"
          onClick={handleOnApplyChanges}
        >
          <span className="text-sm text-white">Apply changes</span>
        </button>
      </div>
    </OptionsContainer>
  );
};

export default TaskStatusesSetup;
