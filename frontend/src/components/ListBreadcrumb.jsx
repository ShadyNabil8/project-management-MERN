import React from "react";
import { Link, useParams } from "react-router-dom";
import SpaceBreadcrumb from "./SpaceBreadcrumb";
import BreadcrumbSeparator from "./BreadcrumbSeparator";
import { IoListOutline } from "react-icons/io5";
import clsx from "clsx";

const ListBreadcrumb = ({ listName, spaceName }) => {
  const { spaceId, workspaceId } = useParams();

  return (
    <>
      <Link
        to={`/${workspaceId}/space/${spaceId}`}
        className={clsx(
          spaceName ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <SpaceBreadcrumb spaceName={spaceName} />
      </Link>
      <BreadcrumbSeparator />
      <div
        className={clsx(
          "flex cursor-default items-center gap-2 rounded-[4px] px-2 py-[2px] hover:bg-hover-color-light-1 dark:hover:bg-hover-color-dark-2",
          listName ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        {listName ? (
          <>
            <IoListOutline className="normal-text-color shrink-0" />
            <span className="normal-text-color text-sm">{listName}</span>
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
    </>
  );
};

export default ListBreadcrumb;
