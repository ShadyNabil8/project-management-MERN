import React from "react";
import { listImage } from "../assets/images";

const List = ({ list }) => {
  return (
    <div className="flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-200">
      <span className="shrink-0">
        <img className="size-3" src={listImage}></img>
      </span>
      <span className="ml-2 text-gray-800">{list.name}</span>
    </div>
  );
};

export default List;
