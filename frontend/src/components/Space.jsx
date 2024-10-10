import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Avatar from "./Avatar";
import DownArrowIcon from "./icons/DownArrowIcon";
import DotsIcon from "./icons/DotsIcon";
import PlusIcon from "./icons/PlusIcon";
import NewListPanel from "./NewListPanel";
import Lists from "./Lists";
import List from "./List";
import clsx from "clsx";

const Space = ({
  name,
  id,
  lists,
  setIsNewListPanelisible,
  setSpaceIdOfNewList,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropped, setIsDropped] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const { workspaceId } = useParams();

  return (
    <div>
      <NavLink
        to={`/${workspaceId}/space/${id}`}
        end
        className={({ isActive }) => {
          setIsSelected(isActive);
          return clsx(
            "relative flex items-center gap-2 rounded-md p-[6px]",
            isSelected ? "bg-[#D9EDFA] dark:bg-[#224D6B]" : "my-hover",
          );
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Avatar
          name={name}
          fontSize="12px"
          size="20px"
          backgroundColor="#F1C1C3"
          textColor="#3D5456"
          round="5px"
          image={
            isHovered ? (
              <DownArrowIcon customStyle="normal-text-color text-md" />
            ) : null
          }
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsDropped((prev) => !prev);
          }}
        />
        <span className="ml-2 flex items-center text-sm text-text-color-light dark:text-text-color-dark">
          {name}
        </span>
        {(isSelected || isHovered) && (
          <div className="absolute right-3 flex items-center gap-1">
            <DotsIcon
              customStyle="lite-text-color"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsNewListPanelisible(true);
                setSpaceIdOfNewList(id);
              }}
            />
            <PlusIcon
              customStyle="lite-text-color "
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
      {isDropped && (
        <Lists>
          {lists.map((list, index) => (
            <List
              listName={list.name}
              listId={list._id}
              spaceId={id}
              key={index}
            ></List>
          ))}
        </Lists>
      )}
    </div>
  );
};

export default Space;
