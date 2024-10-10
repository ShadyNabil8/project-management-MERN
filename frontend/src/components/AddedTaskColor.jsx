import clsx from "clsx";
import React from "react";

const AddedTaskColor = ({ color, onClick, size = "11px" }) => {
  return (
    <button
      className={clsx(
        "shrink-0 rounded-full outline outline-1 outline-offset-[2px]",
      )}
      style={{
        outlineColor: color,
        backgroundColor: color,
        width: size,
        height: size,
      }}
      onClick={onClick}
    ></button>
  );
};

export default AddedTaskColor;
