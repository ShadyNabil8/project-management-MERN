import React from "react";

const SidebarNavigator = ({ children }) => {
  return (
    <div className="flex p-3 flex-col items-center justify-center border-b lg:items-start">
      {children}
    </div>
  );
};

export default SidebarNavigator;
