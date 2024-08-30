import React, { useState } from "react";
import WorkspaceNavigator from "./WorkspaceNavigator";
import Option from "./Option";
import {
  homeImage,
  inboxImage,
  dashboardImage,
  rImage,
} from "../assets/images";
import SidebarNavigator from "./SidebarNavigator";
import Spaces from "./Spaces";
import Space from "./Space";
import { useWorkspace } from "../context/WorkspaceContext";

const Sidebar = ({ workspaces }) => {
  const { currentWorkspace } = useWorkspace();
  return (
    <div className="h-screen w-[300px] bg-[#F7F8F9] p-2 overflow-auto">
      <WorkspaceNavigator workspaces={workspaces}></WorkspaceNavigator>
      <SidebarNavigator>
        <Option option={{ title: "Home", image: homeImage }}></Option>
        <Option option={{ title: "Inbox", image: inboxImage }}></Option>
        <Option
          option={{ title: "Dashboards", image: dashboardImage }}
        ></Option>
      </SidebarNavigator>
      <Spaces>
        {currentWorkspace.spaces.map((space, index) => (
          <Space space={space} key={index}></Space>
        ))}
      </Spaces>
    </div>
  );
};

export default Sidebar;
