import React from "react";

const BreadcrumbTitle = ({ title }) => {
  return title ? (
    <span className="text-[14px] text-gray-800">{title}</span>
  ) : (
    <div className="h-[18px] w-[80px] animate-pulse rounded-md bg-slate-300" />
  );
};

export default BreadcrumbTitle;
