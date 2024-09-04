import React from "react";
import Sidebar from "./Sidebar";
import { useIsFetching } from "@tanstack/react-query";
import MainLoading from "./MainLoading";
import { Outlet } from "react-router-dom";
import WorkspaceNavigator from "./WorkspaceNavigator";
import Header from "./Header";

const RootLayout = () => {
  const isFetching = useIsFetching({ queryKey: ["workspaces"] });
  return (
    <>
      <div className="grid h-screen w-screen grid-cols-[14%_auto] grid-rows-[40px_50px_auto]">
        <div className="col-span-2">
          <Header />
        </div>
        <WorkspaceNavigator />
        <Outlet></Outlet>
        <div className="row-span-2">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
