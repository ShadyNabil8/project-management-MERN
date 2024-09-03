import React from "react";

const Thumbnail = ({ image, size = 18, isRounded = true }) => {
  return (
    <span className="shrink-0">
      {image ? (
        <img
          className={`w-[${size}px] ${isRounded ? "rounded-md" : "rounded-none"}`}
          src={image}
        ></img>
      ) : (
        <div
          className={`h-[${size}px] w-[${size}px] animate-pulse rounded-md bg-slate-300`}
        ></div>
      )}
    </span>
  );
};

export default Thumbnail;
