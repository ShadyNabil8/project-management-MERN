import React, { useEffect, useRef, useState } from "react";
import AddedTaskStatus from "./AddedTaskStatus";
import AddNewTaskStatusBar from "./AddNewTaskStatusBar";

const TaskStatusCollection = ({
  tempTaskStatuses,
  setTempTaskStatuses,
  setChangedOccurred,
  taskStatusName,
  taskStatusTitle,
}) => {
  const [isColorPaletteVisible, setIsColorPaletteVisible] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isColorPaletteVisible) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [isColorPaletteVisible]);

  return (
    <div className="flex flex-col gap-2">
      <p className="lite-text-color text-sm">{taskStatusTitle}</p>
      {tempTaskStatuses[taskStatusName].map((status, index) => (
        <AddedTaskStatus
          key={index}
          status={status}
          setTempTaskStatuses={setTempTaskStatuses}
          setChangedOccurred={setChangedOccurred}
          taskStatusName={taskStatusName}
        />
      ))}
      <AddNewTaskStatusBar
        setChangedOccurred={setChangedOccurred}
        setTempTaskStatuses={setTempTaskStatuses}
        taskStatusName={taskStatusName}
      />
    </div>
  );
};

export default TaskStatusCollection;
