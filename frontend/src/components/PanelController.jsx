import React from "react";
import clsx from "clsx";

const PanelController = ({ darkBackground, setIsPanelVisible }) => {
  return (
    <div
      className={clsx(
        "absolute-center fixed z-30 h-screen w-screen",
        darkBackground ? "bg-black opacity-40" : "bg-transparent",
      )}
      onClick={(e) => {
        e.stopPropagation();
        setIsPanelVisible(false);
      }}
    ></div>
  );
};

export default PanelController;
