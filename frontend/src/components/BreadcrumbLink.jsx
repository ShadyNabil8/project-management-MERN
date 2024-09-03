import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "./Thumbnail";
import BreadcrumbTitle from "./BreadcrumbTitle";

const BreadcrumbLink = ({ title, image, to }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 rounded-md p-1 hover:bg-gray-200"
    >
      <Thumbnail image={image} />
      <BreadcrumbTitle title={title}/>
    </Link>
  );
};

export default BreadcrumbLink;
