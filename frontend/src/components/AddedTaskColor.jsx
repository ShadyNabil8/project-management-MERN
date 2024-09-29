import React from "react";

const AddedTaskColor = ({ color, onClick }) => {
  return (
    <button
      className={`size-3 shrink-0 rounded-full outline outline-1 outline-offset-[3px]`}
      style={{ outlineColor: color, backgroundColor: color }}
      onClick={onClick}
    ></button>
  );
};

export default AddedTaskColor;
