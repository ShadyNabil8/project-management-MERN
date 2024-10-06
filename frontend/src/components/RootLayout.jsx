import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import WorkspaceNavigator from "./WorkspaceNavigator";
import Header from "./Header";
import OutletHeader from "./OutletHeader";

const RootLayout = () => {
  return (
    <div className="grid h-full w-full grid-cols-[50px_auto] grid-rows-[50px_auto] overflow-hidden lg:grid-cols-[14%_auto]">
      <WorkspaceNavigator />
      <OutletHeader />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
