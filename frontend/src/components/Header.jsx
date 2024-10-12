import React, { useState } from "react";
import UserSettingsIcon from "./UserSettingsIcon";

const Header = () => {
  return (
    <div className="relative border-b dark:border-b-border-color-dark flex w-full justify-end bg-[#263E50] px-3 py-1 dark:bg-[#3C414A]">
      <UserSettingsIcon />
    </div>
  );
};

export default Header;
