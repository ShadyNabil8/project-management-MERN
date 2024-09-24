import React from "react";
import { useHeader } from "../context/HeaderContext";

const OutletHeader = () => {
  const { headerContent } = useHeader();
  return (
    <div className="flex items-center gap-1 border-b bg-white p-2 lg:ml-0 dark:border-border-color-dark dark:bg-bg-color-dark-1">
      {headerContent ? headerContent : <h1>Default Header</h1>}
    </div>
  );
};

export default OutletHeader;
