import React from "react";

const OutletHeader = ({ children }) => {
  return (
    <div className="flex min-h-[50px] w-full items-center gap-1 border-b bg-white p-2">
      {children}
    </div>
  );
};

export default OutletHeader;
