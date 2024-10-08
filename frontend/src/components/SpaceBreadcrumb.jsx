import React from "react";
import Avatar from "./Avatar";
import clsx from "clsx";

const SpaceBreadcrumb = ({ spaceName }) => {
  return (
    <div
      className={clsx(
        "my-hover flex items-center gap-2 rounded-md p-1",
        spaceName ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      {spaceName ? (
        <>
          <Avatar
            name={spaceName}
            fontSize="12px"
            size="20px"
            backgroundColor="#F1C1C3"
            textColor="#3D5456"
            round="5px"
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
