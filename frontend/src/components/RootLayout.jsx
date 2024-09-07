import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useIsFetching } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";
import WorkspaceNavigator from "./WorkspaceNavigator";
import Header from "./Header";
import MainLoading from "../components/MainLoading";
import HeaderProvider from "../context/HeaderContext";
import OutletHeader from "./OutletHeader";
import { GoSidebarExpand } from "react-icons/go";

const RootLayout = () => {
  const { workspaceId } = useParams();
  const [isVisibleResizer, setIsVisibleResizer] = useState(false);

  const isSpacesFetching = useIsFetching({
    queryKey: ["spaces", workspaceId],
  });
  const isListsFetching = useIsFetching({
    queryKey: ["lists", workspaceId],
  });

  return (
    <HeaderProvider>
      {/* {(isSpacesFetching > 0 || isListsFetching > 0) && <MainLoading />} */}
      <div className="grid h-screen w-screen grid-cols-[50px_auto] grid-rows-[40px_50px_auto] lg:grid-cols-[14%_auto]">
        <div className="col-span-2">
          <Header />
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsVisibleResizer(true)}
          onMouseLeave={() => setIsVisibleResizer(false)}
        >
          <WorkspaceNavigator />
          <div
            className={`block lg:${isVisibleResizer ? "block" : "hidden"} absolute -right-10 top-1/2 size-fit -translate-y-1/2 animate-fadeIn cursor-pointer rounded-md p-[8px] hover:bg-[#E8EAED] lg:right-3`}
          >
            <GoSidebarExpand className="text-gray-700" />
          </div>
        </div>
        <OutletHeader />
        <div
          onMouseEnter={() => setIsVisibleResizer(true)}
          onMouseLeave={() => setIsVisibleResizer(false)}
        >
          <Sidebar />
        </div>
        <Outlet></Outlet>
      </div>
    </HeaderProvider>
  );
};

export default RootLayout;
