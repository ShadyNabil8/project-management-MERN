import React from "react";
import { Link, useParams } from "react-router-dom";
import SpaceBreadcrumb from "./SpaceBreadcrumb";
import BreadcrumbSeparator from "./BreadcrumbSeparator";

const ListBreadcrumb = ({ list, space }) => {
  const { spaceId, workspaceId } = useParams();

  return (
    <>
      <Link to={`/${workspaceId}/space/${spaceId}`}>
        <SpaceBreadcrumb space={space} />
      </Link>
      <BreadcrumbSeparator />
      <div className="flex cursor-default items-center gap-2 rounded-md p-1 hover:bg-gray-200">
        <span className="shrink-0">
          {list?.image ? (
            <img className="size-[16px] rounded-[4px]" src={list?.image}></img>
          ) : (
            <div
              className={`size-[16px] animate-pulse rounded-[4px] bg-slate-300`}
            ></div>
          )}
        </span>
        {list?.name ? (
          <span className="text-sm text-text-color-light">{list?.name}</span>
        ) : (
          <div className="h-[18px] w-[80px] animate-pulse rounded-md bg-slate-300" />
        )}
      </div>
    </>
  );
};

export default ListBreadcrumb;
