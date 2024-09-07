import React, { useState } from "react";
import { arrowdownImage } from "../assets/images";
import Lists from "./Lists";
import List from "./List";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { fetchLists } from "../api";

const Space = ({ space }) => {
  const [imgSrc, setImgSrc] = useState(space.image);
  const [isDropped, setIsDropped] = useState(true);
  const { workspaceId } = useParams();
  const { data: lists, isLoading } = useFetchData(
    ["lists", workspaceId, space.id],
    () => fetchLists(space.id),
  );

  return (
    <>
      <Link
        to={`/${workspaceId}/space/${space.id}`}
        className="flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-200"
        onMouseEnter={() => setImgSrc(arrowdownImage)}
        onMouseLeave={() => setImgSrc(space.image)}
      >
        <span
          className="hover:bg-gray-300"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsDropped((prev) => !prev);
          }}
        >
          <span className="shrink-0">
            <img className="size-[18px] rounded-[4px]" src={imgSrc}></img>
          </span>
        </span>
        <span className="ml-2 flex items-center text-sm text-gray-800">
          {space.name}
        </span>
      </Link>
      {isDropped && (
        <Lists>
          {lists?.map((list, index) => (
            <List list={list} space={space} key={index}></List>
          ))}
        </Lists>
      )}
    </>
  );
};

export default Space;
