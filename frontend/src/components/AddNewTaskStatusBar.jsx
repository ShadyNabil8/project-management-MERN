import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import ColorPalette from "./ColorPalette";
import PlusIcon from "./icons/PlusIcon";
import ReturnArrowIcon from "./icons/ReturnArrowIcon";
import AddedTaskColor from "./AddedTaskColor";
import { getRandomColorCircle } from "../utils/utils";
import { HiOutlinePlusSm } from "react-icons/hi";
const AddNewTaskStatusBar = ({
  setChangedOccurred,
  setTempTaskStatuses,
  taskStatusName,
  tempTaskStatuses,
}) => {
  const [isColorSelected, setIsColorSelected] = useState(false);
  const [curStatus, setCurStatus] = useState(() => ({
    name: "",
    color: getRandomColorCircle(),
  }));
  const [isColorPaletteVisible, setIsColorPaletteVisible] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const handleOnSave = (e) => {
    e.stopPropagation();

    // Check If there is task status has the same name.
    const taskStatusWithSameName = tempTaskStatuses[taskStatusName].find(
      (taskStatus) => taskStatus.name === curStatus.name,
    );

    if (taskStatusWithSameName) {
      setError("Status name is already taken");
    } else {
      setError(null);
      setIsColorSelected(false);
      setIsColorPaletteVisible(false);
      setChangedOccurred(true);

      setCurStatus({
        name: "",
        color: getRandomColorCircle(),
      });

      setTempTaskStatuses((prev) => {
        return {
          ...prev,
          [taskStatusName]: [...prev[taskStatusName], curStatus],
        };
      });
    }
  };

  useEffect(() => {
    if (!isColorPaletteVisible) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [isColorPaletteVisible]);

  return (
    <>
      <div
        className={clsx(
          "relative flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-border-color-light bg-transparent pl-[15%] pr-2 transition-colors duration-300 dark:border-gray-600 dark:bg-transparent",
          "hover:border-gray-400 hover:bg-[#F7F8F9] dark:hover:border-gray-500 dark:hover:bg-hover-color-dark-1",
          "focus-within:border-0 focus-within:hover:bg-transparent",
          "focus-within:shadow-[0_0_10px_1px_rgba(0,115,255,0.5)] focus-within:ring-1 focus-within:ring-blue-400 focus-within:ring-opacity-50",
        )}
        onClick={() => setIsColorPaletteVisible(true)}
      >
        {curStatus.name || isColorSelected ? (
          <AddedTaskColor
            color={curStatus.color}
            onClick={() => setIsColorPaletteVisible(true)}
          />
        ) : (
          <HiOutlinePlusSm className={"lite-text-color"} />
        )}
        <input
          type="text"
          placeholder="Add status"
          onChange={(e) =>
            setCurStatus((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          value={curStatus.name}
          className={clsx(
            "w-full cursor-pointer bg-transparent px-2 py-1 text-text-color-light focus:outline-none dark:text-text-color-dark",
          )}
          ref={inputRef}
        />
        {isColorPaletteVisible && (
          <ColorPalette
            setIsPanelVisible={setIsColorPaletteVisible}
            onColorChoose={(color) => {
              setCurStatus((prev) => ({ ...prev, color }));
              setIsColorPaletteVisible(false);
              setIsColorSelected(true);
            }}
          />
        )}
        {curStatus.name && (
          <button
            className="flex items-center gap-x-1 rounded-md bg-[#1090E0] px-2 py-[2px]"
            onClick={handleOnSave}
          >
            <span className="text-sm text-white">Save</span>
            <ReturnArrowIcon customStyle="text-white" />
          </button>
        )}
      </div>
      {error && (
        <p className="text-[14px] text-[#dc4a3f] dark:text-[#fd4436]">
          {error}
        </p>
      )}
    </>
  );
};

export default AddNewTaskStatusBar;
