import React from "react";
import Thumbnail from "./Thumbnail";
import BreadcrumbTitle from "./BreadcrumbTitle";

const Breadcrumb = ({ title, image }) => {
  return (
    <div className="flex cursor-default items-center gap-2 rounded-md p-1 hover:bg-gray-200">
      <Thumbnail image={image} />
      <BreadcrumbTitle title={title}/>
    </div>
  );
};

export default Breadcrumb;
