import React from "react";
import PanelController from "./PanelController";

const OptionsContainer = ({ customStyle, setIsPanelVisible, children }) => {
  return (
    <>
      <PanelController setIsPanelVisible={setIsPanelVisible} />
      <div
        className={`absolute z-40 rounded-md bg-white shadow-4xl ${customStyle} `}
      >
        {children}
      </div>
    </>
  );
};

export default OptionsContainer;
