import React from "react";

const Thumbnail = ({ image, size = 5, isRounded = true }) => {
  return (
    <span className="shrink-0">
      {image ? (
        <img
          className={`size-4 ${isRounded ? "rounded-md" : "rounded-none"}`}
          src={image}
        ></img>
      ) : (
        <div className={`size-4 animate-pulse rounded-md bg-slate-300`}></div>
      )}
    </span>
  );
};

export default Thumbnail;
