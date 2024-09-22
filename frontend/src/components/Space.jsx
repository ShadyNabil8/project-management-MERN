import React, { useState } from "react";
import { arrowdownImage } from "../assets/images";
import Lists from "./Lists";
import List from "./List";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { fetchLists } from "../api";
import Avatar from "./Avatar";

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
        to={`/${workspaceId}/space/${space._id}`}
        className="flex cursor-pointer items-center rounded-md p-[6px] hover:bg-gray-200"
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
