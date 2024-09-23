import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import ThemeButton from "./ThemeButton";
import { IoMdClose } from "react-icons/io";
import ColorButton from "./ColorButton";
import colors from "../assets/colors";
import OptionsContainer from "./OptionsContainer";
const PanelTheme = ({ setIsPanelVisible }) => {
  return (
    <OptionsContainer
      customStyle="right-0 top-[45px] flex w-full flex-col p-5  md:right-2 md:w-[440px]"
      setIsPanelVisible={setIsPanelVisible}
    >
      <button
        className="absolute right-4 rounded-md p-1 text-xl text-gray-600 hover:bg-gray-200 dark:text-text-color-dark dark:hover:bg-hover-color-dark-1"
        onClick={() => setIsPanelVisible(false)}
      >
        <IoMdClose />
      </button>

      <p className="text-start text-[18px] font-bold text-gray-800 dark:text-text-color-dark">
        Themes
      </p>
      <p className="dark:text-text-color-dark-lite mt-1 text-start text-[15px] text-gray-500">
        Customize your Workspace by changing the appearance and theme color.
      </p>
      <div className="mt-5 flex w-full rounded-md bg-[#F0F1F3] p-[2px] dark:bg-hover-color-dark-1">
        <ThemeButton colorTheme="light">
          <MdOutlineLightMode /> <span>Light</span>
        </ThemeButton>
        <ThemeButton colorTheme="dark">
          <CiDark /> <span>Dark</span>
        </ThemeButton>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <p className="text-start text-[13px] text-gray-500">My colors</p>
        <div className="grid w-full grid-cols-3 gap-2">
          {colors.map((color, index) => (
            <ColorButton
              key={index}
              colorCode={color.colorCode}
              colorName={color.colorName}
              backgroundColorCode={color.backgroundColorCode}
            />
          ))}
        </div>
      </div>
    </OptionsContainer>
  );
};

export default PanelTheme;
