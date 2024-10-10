import React from "react";
import Avatar from "./Avatar";
import clsx from "clsx";

const SpaceBreadcrumb = ({ spaceName }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 rounded-[4px] px-2 py-[2px] hover:bg-hover-color-light-1 dark:hover:bg-hover-color-dark-2",
        spaceName ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      {spaceName ? (
        <>
          <Avatar
            name={spaceName}
            fontSize="12px"
            size="18px"
            backgroundColor="#F1C1C3"
            textColor="#3D5456"
            round="4px"
          />
          <span className="normal-text-color text-sm font-medium">
            {spaceName}
          </span>
        </>
      ) : (
        <>
          <div
            className={`size-[16px] animate-pulse rounded-[4px] bg-slate-200 dark:bg-slate-600`}
          ></div>
          <div className="h-[18px] w-[80px] animate-pulse rounded-md bg-slate-200 dark:bg-slate-600" />
        </>
      )}
    </div>
  );
};

export default SpaceBreadcrumb;
