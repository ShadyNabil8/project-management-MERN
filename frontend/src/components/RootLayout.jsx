import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import WorkspaceNavigator from "./WorkspaceNavigator";
import Header from "./Header";
import OutletHeader from "./OutletHeader";

const RootLayout = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-[50px_auto] grid-rows-[40px_50px_auto] overflow-hidden lg:grid-cols-[14%_auto]">
      <div className="col-span-2">
        <Header />
      </div>
      <div className="relative">
        <WorkspaceNavigator />
      </div>
      <OutletHeader />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
