import React from "react";
import { Form } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import FormField from "./FormField";
import OptionsContainer from "./OptionsContainer";
import RightLongArrow from "./icons/RightLongArrow";
import TaskStatus from "./TaskStatus";
const NewSpaceSetup = ({
  setIsPanelVisible,
  spaceData,
  setSpaceData,
  errors,
  setIsTaskStatusesVisible,
  taskStatuses,
}) => {
  return (
    <OptionsContainer
      customStyle="above-center flex flex-col w-full sm:w-[580px] p-5 "
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
      <div className="mt-3 flex flex-col gap-6">
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
          className="relative flex h-[70px] items-center gap-5 rounded-lg border px-3 hover:bg-hover-color-light-1 dark:border-border-color-dark dark:hover:bg-hover-color-dark-1"
          onClick={() => setIsTaskStatusesVisible(true)}
        >
          <div className="flex size-[40px] items-center justify-center rounded-lg border bg-white dark:border-border-color-dark dark:bg-bg-color-dark-1">
            <CiBookmarkCheck className="shrink-0 text-2xl text-text-color-light dark:text-text-color-dark" />
          </div>
          <div className="flex flex-col items-start gap-1 overflow-hidden">
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
    </OptionsContainer>
  );
};

export default NewSpaceSetup;
