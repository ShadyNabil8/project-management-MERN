import clsx from "clsx";
import React from "react";

const ColorCircle = ({
  colorCode,
  isSelected = false,
  onClick,
  size = "20px",
}) => {
  return (
    <button
      style={{
        backgroundColor: colorCode,
        outlineColor: isSelected ? colorCode : "",
        width: size,
        height: size,
        outlineWidth: size >= 20 ? "2px" : "1px",
      }}
      className={clsx(
        "shrink-0 cursor-pointer rounded-full outline outline-offset-2 outline-transparent",
        isSelected ? "" : "hover:outline-hover-color-light-2",
      )}
      onClick={() => onClick(colorCode)}
    ></button>
  );
};

export default ColorCircle;
