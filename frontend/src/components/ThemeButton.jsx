import React from "react";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";
const ThemeButton = ({ colorTheme, children }) => {
  const { theme, setTheme } = useTheme();
  const handleOnClick = () => {
    if (theme !== colorTheme) {
      setTheme(colorTheme);
    }
  };
  return (
    <button
      className={clsx(
        "flex w-1/2 items-center justify-center gap-2 rounded-md p-1 text-sm transition-all",
        theme === colorTheme
          ? "bg-bg-color-light-1 text-text-color-light hover:text-text-color-light dark:bg-bg-color-dark-1 dark:text-text-color-dark dark:hover:text-text-color-dark"
          : "bg-hover-color-light-1 text-text-color-light-lite hover:text-text-color-light dark:text-text-color-dark-lite dark:bg-hover-color-dark-1 dark:hover:text-text-color-dark",
      )}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default ThemeButton;
