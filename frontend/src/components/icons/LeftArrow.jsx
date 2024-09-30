import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const LeftArrow = ({ customStyle, onClick }) => {
  return <MdKeyboardArrowLeft className={customStyle} onClick={onClick} />;
};

export default LeftArrow;
