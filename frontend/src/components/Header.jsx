import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
 
  return (
    <div className="flex h-full justify-end bg-[#263E50] px-3 py-1">
      <ProfileDropdown />
    </div>
  );
};

export default Header;
