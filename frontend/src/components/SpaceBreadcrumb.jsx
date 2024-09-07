import React from "react";

const SpaceBreadcrumb = ({ space }) => {
  return (
    <div className="flex cursor-default items-center gap-2 rounded-md p-1 hover:bg-gray-200">
      <span className="shrink-0">
        {space?.image ? (
          <img className="size-[16px] rounded-[4px]" src={space?.image}></img>
        ) : (
          <div
            className={`size-[16px] animate-pulse rounded-[4px] bg-slate-300`}
          ></div>
        )}
      </span>
      {space?.name ? (
        <span className="text-sm text-gray-800">{space?.name}</span>
      ) : (
        <div className="h-[18px] w-[80px] animate-pulse rounded-md bg-slate-300" />
      )}
    </div>
  );
};

export default SpaceBreadcrumb;
