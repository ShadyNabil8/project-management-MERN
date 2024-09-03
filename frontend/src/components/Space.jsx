import React, { useState } from "react";
import { arrowdownImage } from "../assets/images";
import Lists from "./Lists";
import List from "./List";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { fetchLists } from "../api";

const Space = ({ space }) => {
  const [imgSrc, setImgSrc] = useState(space.image);
  const [isDropped, setIsDropped] = useState(false);
  const { workspaceId } = useParams();
  const { data: lists, isLoading } = useFetchData(["lists", space.id], () =>
    fetchLists(space.id),
  );
  return (
    <>
      <Link
        to={`/${workspaceId}/space/${space.id}`}
        className="flex cursor-pointer rounded-md p-2 hover:bg-gray-200"
        onMouseEnter={() => setImgSrc(arrowdownImage)}
        onMouseLeave={() => setImgSrc(space.image)}
      >
        <span
          className="shrink-0 rounded-md p-1 hover:bg-gray-300"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsDropped((prev) => !prev);
          }}
        >
          <img className="size-5 rounded-md" src={imgSrc}></img>
        </span>
        <span className="ml-2 flex items-center text-gray-800">
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
