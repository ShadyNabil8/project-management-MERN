import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import PanelTheme from "./PanelTheme";

const Header = () => {
  return (
    <div className="relative flex h-full justify-end bg-[#263E50] px-3 py-1">
      <ProfileDropdown />
      <PanelTheme />
    </div>
  );
};

export default Header;
