import clsx from "clsx";
import React from "react";
import { TbDots } from "react-icons/tb";
import Icon from "./Icon";

const DotsIcon = ({ customStyle, onClick }) => {
  return (
    <Icon action={onClick}>
      <TbDots className={clsx(customStyle)} />
    </Icon>
  );
};

export default DotsIcon;
