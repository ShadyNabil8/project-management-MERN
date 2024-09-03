import React from "react";

const Thumbnail = ({ image, size = 5, isRounded = true }) => {
  return (
    <span className="shrink-0">
      {image ? (
        <img
          className={`size-${size} ${isRounded ? "rounded-md" : "rounded-none"}`}
          src={image}
        ></img>
      ) : (
        <div
          className={`size-${size} animate-pulse rounded-md bg-slate-300`}
        ></div>
      )}
    </span>
  );
};

export default Thumbnail;
