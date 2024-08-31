import React from "react";
import { listImage } from "../assets/images";
import { Link, useParams } from "react-router-dom";

const List = ({ list }) => {
  const { workspaceId } = useParams();
  return (
    <Link
      to={`/${workspaceId}/space/${list.spaceId}/list/${list.id}`}
      className="flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-200"
    >
      <span className="shrink-0">
        <img className="size-3" src={listImage}></img>
      </span>
      <span className="ml-2 text-gray-800">{list.name}</span>
    </Link>
  );
};

export default List;
