import React, { useState } from "react";
import UserSettingsIcon from "./UserSettingsIcon";

const Header = () => {
  return (
    <div className="relative flex w-full justify-end bg-[#263E50] px-3 py-1 dark:bg-[#3C414A]">
      <UserSettingsIcon />
    </div>
  );
};

export default Header;
