import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeButton = ({ colorTheme, children }) => {
  const { theme, setTheme } = useTheme();
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleOnClick = () => {
    if (theme !== colorTheme) {
      setTheme(colorTheme);
    }
  };
  return (
    <button
      style={{
        backgroundColor: theme === colorTheme ? "white" : "transparent",
        color: isHover || theme === colorTheme ? "#181C14" : "#6b7280",
        transition: "all 0.3s",
      }}
      className="flex w-1/2 items-center justify-center gap-2 rounded-sm p-1 text-sm text-gray-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default ThemeButton;
