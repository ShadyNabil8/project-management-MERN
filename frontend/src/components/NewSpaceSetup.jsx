import React from "react";
import { Form } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import FormField from "./FormField";
import OptionsContainer from "./OptionsContainer";
const NewSpaceSetup = ({
  setIsPanelVisible,
  spaceData,
  setSpaceData,
  errors,
  setIsTaskStatusesVisible,
}) => {
  return (
    <OptionsContainer
      customStyle="above-center flex flex-col w-[580px] p-5"
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
      <Form className="mt-3 flex flex-col gap-6">
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
            <CiBookmarkCheck className="text-2xl text-text-color-light dark:text-text-color-dark" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-text-color-light dark:text-text-color-dark">
              Task Statuses
            </p>
          </div>
          <MdKeyboardArrowRight className="absolute right-5 text-text-color-light-lite dark:text-text-color-dark-lite" />
        </button>
      </Form>
    </OptionsContainer>
  );
};

export default NewSpaceSetup;
