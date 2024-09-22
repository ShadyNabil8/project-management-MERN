import React from "react";

const OptionsContainer = ({ children }) => {
  return (
    <div className="absolute -right-1 top-[45px] w-[280px] bg-white shadow-4xl">
      {children}
    </div>
  );
};

export default OptionsContainer;
