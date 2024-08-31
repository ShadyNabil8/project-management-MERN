import React from "react";
import Sidebar from ".//Sidebar";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import MainLoading from "./MainLoading";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  const isFetching = useIsFetching();
  return (
    <>
      {isFetching > 0 && <MainLoading />}
      <div className="flex gap-2">
        <Sidebar />
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainPage;
