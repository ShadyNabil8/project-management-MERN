import React, { useEffect, useState } from "react";
import NewSpaceSetup from "./NewSpaceSetup";
import TaskStatusesSetup from "./TaskStatusesSetup";
import defaultTaskStatuses from "../assets/defaultTaskStatuses";

const NewSpacePanel = ({ setIsPanelVisible }) => {
  const [taskStatuses, setTaskStatuses] = useState(defaultTaskStatuses);
  const [isTaskStatusesVisible, setIsTaskStatusesVisible] = useState(false);
  const [spaceData, setSpaceData] = useState({
    name: "",
    description: "",
  });
  useEffect(() => {
    console.log(taskStatuses);
  }, [taskStatuses]);

  useEffect(() => {
    console.log(spaceData);
  }, [spaceData]);

  return (
    <>
      {isTaskStatusesVisible ? (
        <TaskStatusesSetup
          spaceName={spaceData.name}
          setIsPanelVisible={setIsPanelVisible}
          taskStatuses={taskStatuses}
          setTaskStatuses={setTaskStatuses}
          setIsTaskStatusesVisible={setIsTaskStatusesVisible}
        />
      ) : (
        <NewSpaceSetup
          setIsPanelVisible={setIsPanelVisible}
          spaceData={spaceData}
          setSpaceData={setSpaceData}
          setIsTaskStatusesVisible={setIsTaskStatusesVisible}
          taskStatuses={taskStatuses}
        />
      )}
    </>
  );
};

export default NewSpacePanel;
