import React from "react";
import SidebarNavigator from "./SidebarNavigator";
import Spaces from "./Spaces";
import SidebarLink from "./SidebarLink";
import { useParams } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { GoInbox } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrHomeRounded } from "react-icons/gr";

const Sidebar = () => {
  const { workspaceId } = useParams();

  return (
    <div className="h-full border-r bg-[#F7F8F9] lg:overflow-auto">
      <SidebarNavigator>
        <SidebarLink
          link={{
            title: "Home",
            image: <GrHomeRounded className="size-4 text-gray-600" />,
            to: `/${workspaceId}/home`,
          }}
        />
        <SidebarLink
          link={{
            title: "Inbox",
            image: <GoInbox className="size-5 text-gray-600" />,
            to: `/${workspaceId}/inbox`,
          }}
        />
        <SidebarLink
          link={{
            title: "Dashboards",
            image: <LuLayoutDashboard className="size-5 text-gray-600" />,
            to: `/${workspaceId}/dashboards`,
          }}
        />
      </SidebarNavigator>
      <Spaces />
    </div>
  );
};

export default Sidebar;
