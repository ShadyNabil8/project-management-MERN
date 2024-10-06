import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "./Avatar";
import DownArrowIcon from "./icons/DownArrowIcon";
import DotsIcon from "./icons/DotsIcon";
import PlusIcon from "./icons/PlusIcon";
import NewListPanel from "./NewListPanel";

const Space = ({ name, id, setIsNewListPanelisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropped, setIsDropped] = useState(true);

  const { workspaceId } = useParams();

  return (
    <div>
      <Link
        to={`/${workspaceId}/space/${id}`}
        className="relative flex cursor-pointer items-center gap-2 rounded-md p-[6px] hover:bg-gray-200 dark:hover:bg-hover-color-dark-1"
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
              <DownArrowIcon customStyle="normal-text-color text-lg" />
            ) : null
          }
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsDropped((prev) => !prev);
          }}
        />
        <span className="ml-2 flex items-center text-sm font-medium text-text-color-light dark:text-text-color-dark">
          {name}
        </span>
        {isHovered && (
          <div className="absolute right-3 flex items-center gap-1">
            <DotsIcon
              customStyle="lite-text-color"
              onClick={() => console.log("hi")}
            />
            <PlusIcon
              customStyle="lite-text-color "
              onClick={() => setIsNewListPanelisible(true)}
            />
          </div>
        )}
      </Link>
      {/* {isDropped && (
        <Lists>
          {lists?.map((list, index) => (
            <List list={list} space={space} key={index}></List>
          ))}
        </Lists>
      )} */}
    </div>
  );
};

export default Space;
