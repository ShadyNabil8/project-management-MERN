import React, { useState } from "react";
import Avatar from "./Avatar";
import { useAuth } from "../context/AuthContext";
import { IoIosArrowDown } from "react-icons/io";
import OptionsContainer from "./OptionsContainer";
import Option from "./Option";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
const ProfileDropdown = () => {
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);
  const { user, logout } = useAuth();

  return (
    <button
      className="relative box-border flex grow-0 items-center gap-[2px] rounded-full border border-transparent bg-slate-600 px-[6px] py-1 transition-[border] hover:border-[#767676]"
      onClick={() => setIsProfileDropdownVisible((prev) => !prev)}
    >
      <Avatar
        name={user.fullName}
        fontSize="14px"
        size="18px"
        backgroundColor="#7F77F1"
        textColor="#FFFFFF"
        round="100%"
      />
      <IoIosArrowDown className="text-[10px] text-white" />
      {isProfileDropdownVisible && (
        <OptionsContainer>
          <div className="flex items-center gap-2 p-3">
            <Avatar
              name={user.fullName}
              fontSize="14px"
              size="30px"
              backgroundColor="#7F77F1"
              textColor="#FFFFFF"
              round="100%"
              numberOfLetters={2}
            />
            <span className="text-sm">{user.fullName}</span>
          </div>
          <hr className="w-full text-black"></hr>
          <div className="flex flex-col gap-0 p-2">
            <Option
              option={{ title: "Themes", image: <AiOutlineFormatPainter /> }}
            />
            <Option
              option={{ title: "Setting", image: <IoSettingsOutline /> }}
            />
          </div>
          <hr className="w-full text-black"></hr>
          <div className="flex flex-col gap-0 p-2">
            <Option
              option={{
                title: "Log out",
                image: <AiOutlineLogout />,
                action: logout,
              }}
            />
          </div>
        </OptionsContainer>
      )}
    </button>
  );
};

export default ProfileDropdown;
