import React from "react";

const Icon = ({ action, children }) => {
  const handleClick = (e) => {
    if (action) {      
      action(e);
    } else {
      console.warn("No action defined for this icon.");
    }
  };
  return (
    <button
      className="rounded-md p-1 hover:bg-hover-color-light-2 dark:hover:bg-hover-color-dark-2"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Icon;
