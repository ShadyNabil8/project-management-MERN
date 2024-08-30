import React from "react";
import Option from "./Option";
import { IoMdSettings } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import Workspace from "./Workspace";
import { settingsImage, userImage } from "../assets/images";

const options = [
  {
    title: "setting",
    image: settingsImage,
  },
  {
    title: "Manage users",
    image: userImage,
  },
];

const SelectedWorkspace = ({ workspace }) => {
  return (
    <div className="mb-2 flex flex-col justify-center border-b border-gray-200">
      <div className="pointer-events-none">
        <Workspace workspace={workspace}></Workspace>
      </div>
      <div className="mt-3">
        {options.map((option, index) => (
          <Option key={index} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default SelectedWorkspace;
