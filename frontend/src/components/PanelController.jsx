import React from "react";

const PanelController = ({ setIsPanelVisible }) => {
  return (
    <div
      className="fixed z-30 h-screen w-screen bg-transparent"
      onClick={() => setIsPanelVisible(false)}
    ></div>
  );
};

export default PanelController;
