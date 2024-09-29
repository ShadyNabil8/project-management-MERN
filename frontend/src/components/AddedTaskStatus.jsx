import React, { useState } from "react";
import AddedTaskColor from "./AddedTaskColor";
import ColorPalette from "./ColorPalette";

const AddedTaskStatus = ({
  status,
  setTempTaskStatuses,
  setChangedOccurred,
  taskStatusName,
}) => {
  const [isColorPaletteVisible, setIsColorPaletteVisible] = useState(false);
  const handleOnAddedTackNameChange = (e) => {
    setTempTaskStatuses((prev) => {
      return {
        ...prev,
        [taskStatusName]: prev[taskStatusName].map((addedStatus) => ({
          ...addedStatus,
          name:
            addedStatus.name === status.name
              ? e.target.value
              : addedStatus.name,
        })),
      };
    });

    setChangedOccurred(true);
  };
  const handleOnAddedTackColorChange = (newColor) => {
    setTempTaskStatuses((prev) => {
      return prev.map((addedStatus) => ({
        ...addedStatus,
        color: addedStatus.name === status.name ? newColor : addedStatus.color,
      }));
    });
    setChangedOccurred(true);
  };
  return (
    <div className="normal-text-color relative flex items-center gap-4 rounded-md border border-border-color-light bg-transparent pl-[15%] hover:border-gray-400 dark:border-gray-600 dark:bg-transparent dark:hover:border-gray-500">
      <AddedTaskColor
        color={status.color}
        onClick={() => setIsColorPaletteVisible(true)}
      />

      <input
        type="text"
        placeholder=""
        value={status.name}
        onChange={handleOnAddedTackNameChange}
        className="normal-text w-full bg-transparent px-2 py-1 focus:outline-none"
      />
      {isColorPaletteVisible && (
        <ColorPalette
          setIsPanelVisible={setIsColorPaletteVisible}
          onColorChoose={(newColor) => {
            handleOnAddedTackColorChange(newColor);
            setIsColorPaletteVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default AddedTaskStatus;
