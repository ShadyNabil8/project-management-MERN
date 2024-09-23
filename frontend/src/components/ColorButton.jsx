import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { IoCheckmarkOutline } from "react-icons/io5";

const ColorButton = ({ backgroundColorCode, colorName, colorCode }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const { color, setColor } = useTheme();

  return (
    <button
      style={{
        borderColor: color === colorName ? colorCode : "",
      }}
      className={`flex h-[40px] items-center justify-start gap-2 rounded-md border px-3 text-sm text-gray-500 hover:bg-[#F7F8F9] dark:border-border-color-dark dark:hover:bg-hover-color-dark-1`}
      onClick={() => setColor(colorName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{ backgroundColor: colorCode }}
        className="relative size-[17px] shrink-0 rounded-md"
      >
        {color === colorName && (
          <IoCheckmarkOutline className="absolute-center absolute text-white" />
        )}
      </div>
      {colorName}
    </button>
  );
};

export default ColorButton;
