import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import FormField from "./FormField";
import OptionsContainer from "./OptionsContainer";
import RightLongArrow from "./icons/RightLongArrow";
import TaskStatus from "./TaskStatus";
import api from "../api/api";
import useNotifier from "../hooks/useNotifier";
import ButtonLoading from "./ButtonLoading";
import { useAuth } from "../context/AuthContext";
const NewSpaceSetup = ({
  setIsPanelVisible,
  setIsTaskStatusesVisible,
  taskStatuses,
  spaceData,
  setSpaceData,
}) => {
  const [errors, setErrors] = useState({
    name: null,
    description: null,
  });
  const [loading, setLoading] = useState(false);

  const notify = useNotifier();
  const { workspaceId } = useParams();
  const { setUser } = useAuth();
  const createNewSpace = async () => {
    try {
      setLoading(true);

      const nameError = !spaceData.name ? "Space name is required" : null;

      setErrors((prev) => ({
        ...prev,
        name: nameError,
      }));

      if (!nameError) {
        const response = await api.post("/space/create", {
          spaceName: spaceData.name,
          spaceDescription: spaceData.description,
          taskStatuses,
          workspaceId,
        });

        // Add this new space to the current user data.
        setUser((prev) => ({
          ...prev,
          workspaces: prev.workspaces.map((workspace) =>
            workspace._id === workspaceId
              ? {
                  ...workspace,
                  spaces: [...workspace.spaces, response.data.space],
                }
              : workspace,
          ),
        }));
        setIsPanelVisible(false);
      }
    } catch (error) {
      notify.error(error.response?.data?.message || "Something wrong happened");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OptionsContainer
      customStyle="fixed above-center flex flex-col w-full sm:w-[580px] p-5 "
      setIsPanelVisible={setIsPanelVisible}
      darkBackground={true}
    >
      <p className="text-lg font-bold text-text-color-light dark:text-text-color-dark">
        Create a space
      </p>
      <p className="text-[14px] text-text-color-light-lite dark:text-text-color-dark-lite">
        A Space represents teams, departments, or groups, each with its own
        Lists, workflows, and settings.
      </p>
      <div className="mb-[64px] mt-3 flex flex-col gap-6">
        <FormField
          type={"text"}
          label={"Name"}
          error={errors.name}
          value={spaceData.name}
          placeholder={"eg. Marketing, Engineering, HR"}
          handleOnChange={(e) =>
            setSpaceData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <FormField
          type={"text"}
          label={"Description (optional)"}
          error={errors.description}
          value={spaceData.description}
          placeholder={""}
          handleOnChange={(e) =>
            setSpaceData((prev) => ({ ...prev, description: e.target.value }))
          }
        />
        <button
          className="relative flex h-[70px] items-center gap-5 overflow-hidden rounded-lg border px-3 hover:bg-hover-color-light-1 dark:border-border-color-dark dark:hover:bg-hover-color-dark-1"
          onClick={() => setIsTaskStatusesVisible(true)}
        >
          <div className="flex size-[40px] shrink-0 items-center justify-center rounded-lg border bg-white dark:border-border-color-dark dark:bg-bg-color-dark-1">
            <CiBookmarkCheck className="shrink-0 text-2xl text-text-color-light dark:text-text-color-dark" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-sm text-text-color-light dark:text-text-color-dark">
              Task Statuses
            </p>
            <div className="flex items-center gap-1 whitespace-nowrap">
              {Object.entries(taskStatuses).map(([statusCategory, statuses]) =>
                statuses.map((status, index) => (
                  <>
                    <TaskStatus status={status} key={index} />
                    <RightLongArrow customStyle={"lite-text-color"} />
                  </>
                )),
              )}
            </div>
          </div>

          <MdKeyboardArrowRight className="absolute right-5 text-text-color-light-lite dark:text-text-color-dark-lite" />
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-[64px] items-center justify-end rounded-b-xl bg-bg-color-light-2 px-5 dark:bg-bg-color-dark-1">
        <button
          style={loading ? { pointerEvents: "none" } : {}}
          className="flex h-[35px] w-[100px] shrink-0 items-center justify-center rounded-md bg-[#589eca] text-[14px] text-white transition-colors hover:bg-[#66B8EB]"
          onClick={createNewSpace}
        >
          {loading ? <ButtonLoading /> : "Create Space"}
        </button>
      </div>
    </OptionsContainer>
  );
};

export default NewSpaceSetup;
