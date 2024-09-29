import React from "react";
import ColorCircle from "./ColorCircle";
import ExitIcon from "./icons/ExitIcon";
import OptionsContainer from "./OptionsContainer";
import colorsCircles from "../assets/ColorsCircles";
const ColorPalette = ({ setIsPanelVisible, selectedColor, onColorChoose }) => {
  const onClose = () => {
    setIsPanelVisible(false);
  };

  return (
    <OptionsContainer
      setIsPanelVisible={setIsPanelVisible}
      customStyle="-top-1 flex -translate-y-full flex-col gap-2 p-5"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-color-light-lite">Colors</p>
        <ExitIcon onClick={onClose} />
      </div>
      <div className="grid grid-cols-8 gap-3">
        {colorsCircles.map((colorCircle, index) => (
          <ColorCircle
            key={index}
            colorCode={colorCircle.color}
            isSelected={colorCircle.color === selectedColor}
            onClick={onColorChoose}
          />
        ))}
      </div>
    </OptionsContainer>
  );
};

export default ColorPalette;
