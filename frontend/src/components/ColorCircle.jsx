import clsx from "clsx";
import React from "react";

const ColorCircle = ({ colorCode, isSelected, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: colorCode,
        outlineColor: isSelected ? colorCode : "",
      }}
      className={clsx(
        "size-5 cursor-pointer rounded-full outline outline-2 outline-offset-2 outline-transparent",
        isSelected ? "" : "hover:outline-hover-color-light-2",
      )}
      onClick={() => onClick(colorCode)}
    ></button>
  );
};

export default ColorCircle;
