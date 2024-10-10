import React, { useEffect, useState } from "react";
import { listImage } from "../assets/images";
import { Link, NavLink, useParams } from "react-router-dom";
import { IoListOutline } from "react-icons/io5";
import clsx from "clsx";
import DotsIcon from "./icons/DotsIcon";

const List = ({ listName, spaceId, listId }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { workspaceId } = useParams();

  return (
    <NavLink
      to={`/${workspaceId}/space/${spaceId}/list/${listId}`}
      className={({ isActive }) => {
        return clsx(
          "relative flex items-center rounded-md p-[6px]",
          isActive ? "bg-[#D9EDFA] dark:bg-[#224D6B]" : "my-hover",
        );
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IoListOutline className="normal-text-color shrink-0" />
      <span className="normal-text-color ml-2 text-sm">{listName}</span>

      {isHovered && (
        <div className="absolute right-3 flex items-center">
          <DotsIcon
            customStyle="lite-text-color"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsNewListPanelisible(true);
              setSpaceIdOfNewList(id);
            }}
          />
        </div>
      )}
    </NavLink>
  );
};

export default List;
