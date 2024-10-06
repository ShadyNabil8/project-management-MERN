import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DownArrowIcon = ({ customStyle, onClick }) => {
  return <MdKeyboardArrowDown className={customStyle} onClick={onClick} />;
};

export default DownArrowIcon;
