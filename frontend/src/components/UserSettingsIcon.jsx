import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { useAuth } from "../context/AuthContext";
import { IoIosArrowDown } from "react-icons/io";
import UserPanel from "./UserPanel";
import PanelTheme from "./PanelTheme";

const UserSettingsIcon = () => {
  const [isUserPanelVisible, setIsUserPanelVisible] = useState(false);
  const [isThemePanelVisible, setIsThemePanelVisible] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (isThemePanelVisible) {
      setIsUserPanelVisible(false);
    }
  }, [isThemePanelVisible]);

  return (
    <>
      <button
        className="box-border flex items-center gap-[2px] rounded-full border border-transparent bg-slate-600 px-[6px] py-1 transition-[border] hover:border-[#767676]"
        onClick={() => setIsUserPanelVisible((prev) => !prev)}
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
      </button>
      {isThemePanelVisible && (
        <PanelTheme setIsPanelVisible={setIsThemePanelVisible} />
      )}
      {isUserPanelVisible && (
        <UserPanel
          setIsThemePanelVisible={setIsThemePanelVisible}
          setIsPanelVisible={setIsUserPanelVisible}
        />
      )}
    </>
  );
};

export default UserSettingsIcon;
