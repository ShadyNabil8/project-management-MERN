import React from "react";

const SidebarNavigator = ({ children }) => {
  return (
    <div className="dark:border-b-border-color-dark flex flex-col items-center justify-center border-b p-2 lg:items-start lg:p-3">
      {children}
    </div>
  );
};

export default SidebarNavigator;
