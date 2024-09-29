import React from "react";
import PanelController from "./PanelController";

const OptionsContainer = ({
  customStyle,
  setIsPanelVisible,
  darkBackground = false,
  children,
}) => {
  return (
    <>
      <PanelController
        setIsPanelVisible={setIsPanelVisible}
        darkBackground={darkBackground}
      />
      <div
        className={`absolute z-40 rounded-md bg-white shadow-4xl dark:bg-bg-color-dark-2 ${customStyle} `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  );
};

export default OptionsContainer;
