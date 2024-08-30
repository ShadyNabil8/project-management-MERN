import React, { useState } from "react";
import { arrowdownImage } from "../assets/images";
import Lists from "./Lists";
import List from "./List";

const Space = ({ space }) => {
  const [imgSrc, setImgSrc] = useState(space.image);
  const [isDropped, setIsDropped] = useState(false);

  const handleMouseEnter = () => {
    setImgSrc(arrowdownImage);
  };

  const handleMouseLeave = () => {
    setImgSrc(space.image);
  };
  const handleOnClick = () => {
    setIsDropped((prev) => !prev);
  };
  return (
    <>
      <div
        className="flex cursor-pointer rounded-md p-2 hover:bg-gray-200"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          className="shrink-0 rounded-md p-1 hover:bg-gray-300"
          onClick={handleOnClick}
        >
          <img className="size-5 rounded-md" src={imgSrc}></img>
        </span>
        <span className="ml-2 flex items-center text-gray-800">
          {space.name}
        </span>
      </div>
      {isDropped && (
        <Lists>
          {space.lists.map((list, index) => (
            <List list={list} key={index}></List>
          ))}
        </Lists>
      )}
    </>
  );
};

export default Space;
