import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "./Avatar";
import DownArrowIcon from "./icons/DownArrowIcon";
import DotsIcon from "./icons/DotsIcon";
import PlusIcon from "./icons/PlusIcon";
import NewListPanel from "./NewListPanel";
import Lists from "./Lists";
import List from "./List";

const Space = ({
  name,
  id,
  lists,
  setIsNewListPanelisible,
  setSpaceIdOfNewList,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropped, setIsDropped] = useState(false);

  const { workspaceId } = useParams();

  return (
    <div>
      <Link
        to={`/${workspaceId}/space/${id}`}
        className="my-hover relative flex cursor-pointer items-center gap-2 rounded-md p-[6px]"
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
            <DotsIcon customStyle="lite-text-color" />
            <PlusIcon
              customStyle="lite-text-color "
              onClick={() => {
                setIsNewListPanelisible(true);
                setSpaceIdOfNewList(id);
              }}
            />
          </div>
        )}
      </Link>
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
