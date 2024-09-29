import React, { useState } from "react";
import { arrowdownImage } from "../assets/images";
import { Link, useParams } from "react-router-dom";
import Avatar from "./Avatar";

const Space = ({ space }) => {
  const [imgSrc, setImgSrc] = useState(space.image);
  const [isDropped, setIsDropped] = useState(true);
  const { workspaceId } = useParams();

  return (
    <>
      <Link
        to={`/${workspaceId}/space/${space._id}`}
        className="flex cursor-pointer items-center gap-2 rounded-md p-[6px] hover:bg-gray-200 dark:hover:bg-hover-color-dark-1"
        onMouseEnter={() => setImgSrc(arrowdownImage)}
        onMouseLeave={() => setImgSrc(null)}
      >
        <Avatar
          name={space.name}
          fontSize="12px"
          size="20px"
          backgroundColor="#F1C1C3"
          textColor="#3D5456"
          round="5px"
          image={imgSrc}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsDropped((prev) => !prev);
          }}
        />
        <span className="ml-2 flex items-center text-sm font-medium text-text-color-light dark:text-text-color-dark">
          {space.name}
        </span>
      </Link>
      {/* {isDropped && (
        <Lists>
          {lists?.map((list, index) => (
            <List list={list} space={space} key={index}></List>
          ))}
        </Lists>
      )} */}
    </>
  );
};

export default Space;
