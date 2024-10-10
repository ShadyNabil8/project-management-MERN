import clsx from "clsx";
import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import Icon from "./Icon";

const PlusIcon = ({ customStyle, onClick }) => {
  return (
    <Icon action={onClick}>
      <HiOutlinePlusSm className={clsx(customStyle)} />
    </Icon>
  );
};

export default PlusIcon;
