import React from "react";
import { listImage } from "../assets/images";
import { Link, useParams } from "react-router-dom";

const List = ({ list, space }) => {
  const { workspaceId } = useParams();
  return (
    <Link
      to={`/${workspaceId}/space/${space.id}/list/${list.id}`}
      className="flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-200"
    >
      <span className="shrink-0">
        <img className="size-[11px]" src={listImage}></img>
      </span>
      <span className="ml-2 text-sm text-text-color-light">{list.name}</span>
    </Link>
  );
};

export default List;
