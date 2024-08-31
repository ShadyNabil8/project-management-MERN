import React from "react";
import WorkspaceNavigator from "./WorkspaceNavigator";
import { homeImage, inboxImage, dashboardImage } from "../assets/images";
import SidebarNavigator from "./SidebarNavigator";
import Spaces from "./Spaces";
import SidebarLink from "./SidebarLink";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const { workspaceId } = useParams();

  return (
    <div className="h-screen w-[300px] overflow-auto bg-[#F7F8F9] p-2">
      <WorkspaceNavigator />
      <SidebarNavigator>
        <SidebarLink
          link={{ title: "Home", image: homeImage, to: `/${workspaceId}/home` }}
        />
        <SidebarLink
          link={{
            title: "Inbox",
            image: inboxImage,
            to: `/${workspaceId}/inbox`,
          }}
        />
        <SidebarLink
          link={{
            title: "Dashboards",
            image: dashboardImage,
            to: `/${workspaceId}/dashboards`,
          }}
        />
      </SidebarNavigator>
      <Spaces />
    </div>
  );
};

export default Sidebar;
