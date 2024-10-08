import React, { useEffect } from "react";
import { listImage } from "../assets/images";
import { Link, useParams } from "react-router-dom";
import { IoListOutline } from "react-icons/io5";

const List = ({ listName, spaceId, listId }) => {
  const { workspaceId } = useParams();

  return (
    <Link
      to={`/${workspaceId}/space/${spaceId}/list/${listId}`}
      className="my-hover flex cursor-pointer items-center rounded-md p-2"
    >
      <IoListOutline className="normal-text-color shrink-0" />
      <span className="normal-text-color ml-2 text-sm">{listName}</span>
    </Link>
  );
};

export default List;
