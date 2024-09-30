import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useNotifier from "../hooks/useNotifier";
import NewSpaceSetup from "./NewSpaceSetup";
import TaskStatusesSetup from "./TaskStatusesSetup";
import defaultTaskStatuses from "../assets/defaultTaskStatuses";

const NewSpacePanel = ({ setIsPanelVisible }) => {
  const [spaceData, setSpaceData] = useState({
    name: "",
    description: "",
  });
  const [taskStatuses, setTaskStatuses] = useState(defaultTaskStatuses);
  const [isTaskStatusesVisible, setIsTaskStatusesVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: null,
    description: null,
  });
  const notify = useNotifier();
  const { workspaceId } = useParams();

  const onCreateSpace = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      const nameError = !spaceData.name ? "Space name is required" : null;

      setErrors((prev) => ({
        ...prev,
        name: nameError,
      }));

      if (!nameError) {
        // const response = await api.post("/space/create", {
        //   name,
        //   workspaceId,
        // });
      }
    } catch (error) {
      notify.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(taskStatuses);
  }, [taskStatuses]);

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
          errors={errors}
          setIsTaskStatusesVisible={setIsTaskStatusesVisible}
          taskStatuses={taskStatuses}
        />
      )}
      {/* <button className="mt-4 flex shrink-0 items-center justify-center self-end rounded-md bg-[#589eca] px-3 py-2 text-[14px] text-white transition-colors hover:bg-[#66B8EB]">
        Create
      </button> */}
    </>
  );
};

export default NewSpacePanel;
