import React from "react";
import Avatar from "./Avatar";

const SpaceBreadcrumb = ({ space }) => {
  return (
    <div className="flex cursor-default items-center gap-2 rounded-md p-1 hover:bg-gray-200">
      <span className="shrink-0">
        {space ? (
          <Avatar
            name={space.name}
            fontSize="12px"
            size="20px"
            backgroundColor="#F1C1C3"
            textColor="#3D5456"
            round="5px"
          />
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
