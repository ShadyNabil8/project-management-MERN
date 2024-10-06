import React from "react";
import OptionsContainer from "./OptionsContainer";
import Avatar from "./Avatar";
import Option from "./Option";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { useAuth } from "../context/AuthContext";

const UserPanel = ({ setIsPanelVisible, setIsThemePanelVisible }) => {
  const { user, logout } = useAuth();

  return (
    <OptionsContainer
      customStyle="absolute right-2 top-[45px] w-[280px]"
      setIsPanelVisible={setIsPanelVisible}
    >
      <div className="flex items-center gap-2 p-3">
        <div className="relative">
          <Avatar
            name={user.fullName}
            fontSize="14px"
            size="33px"
            backgroundColor="#7F77F1"
            textColor="#FFFFFF"
            round="100%"
            numberOfLetters={2}
          />
          <div className="absolute bottom-0 right-0 box-content size-[8px] rounded-full border-2 border-white bg-green-500 dark:border-bg-color-dark-3"></div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium dark:text-text-color-dark">
            {user.fullName}
          </span>
          <span className="text-[13px] text-text-color-light dark:text-text-color-dark-lite">
            Online
          </span>
        </div>
      </div>
      <hr className="w-full dark:border-border-color-dark"></hr>
      <div className="flex flex-col gap-0 p-2">
        <Option
          title="Themes"
          image=<AiOutlineFormatPainter />
          action={() => setIsThemePanelVisible(true)}
        />
        <Option title="Setting" image=<IoSettingsOutline /> />
      </div>
      <hr className="w-full dark:border-border-color-dark"></hr>
      <div className="flex flex-col gap-0 p-2">
        <Option title="Log out" image=<AiOutlineLogout /> action={logout} />
      </div>
    </OptionsContainer>
  );
};

export default UserPanel;
