import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Icon from "./Icon";
import clsx from "clsx";

const DownArrowIcon = ({ customStyle, onClick }) => {
  return (
    <Icon action={onClick}>
      <MdKeyboardArrowDown className={clsx(customStyle)} />
    </Icon>
  );
};

export default DownArrowIcon;
