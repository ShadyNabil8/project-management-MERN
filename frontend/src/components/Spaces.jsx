import React from "react";

const Spaces = ({ children }) => {
  return (
    <div className="mt-3 p-2">
      <span className="mb-3 block text-sm text-gray-400">Spaces</span>
      {children}
    </div>
  );
};

export default Spaces;
