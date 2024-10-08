import React from "react";
import PanelController from "./PanelController";
import clsx from "clsx";

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
        className={clsx(
          "z-40 rounded-xl bg-white shadow-4xl dark:bg-bg-color-dark-2",
          customStyle,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  );
};

export default OptionsContainer;
