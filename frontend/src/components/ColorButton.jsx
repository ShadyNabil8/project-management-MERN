import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

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
        borderColor: color === colorName ? colorCode : "#E5E7EB",
        backgroundColor:
          color === colorName
            ? backgroundColorCode
            : isHover
              ? "#F7F8F9"
              : "transparent",
      }}
      className="flex h-[40px] items-center justify-start gap-2 rounded-md border px-3 text-sm text-gray-500 hover:bg-[#F7F8F9]"
      onClick={() => setColor(colorName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{ backgroundColor: colorCode }}
        className="size-[17px] shrink-0 rounded-md"
      ></div>
      {colorName}
    </button>
  );
};

export default ColorButton;
