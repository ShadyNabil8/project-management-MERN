import React from "react";
import { notfoundImage } from "../assets/images";
import { useLocation, useNavigate } from "react-router-dom";

const NotFoundTeamPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const message =
    location.state?.message ||
    "You don’t have access to this link or this link is invalid.";

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-white">
      <div className="absolute left-1/2 top-1/2 flex min-h-[285px] w-[397px] max-w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg bg-white px-[25px] pt-[36px] shadow-3xl">
        <img className="w-[70px] shrink-0" src={notfoundImage}></img>
        <p className="mt-[30px] text-[20px] font-semibold text-gray-700">
          This page is unavailable
        </p>
        <p className="mt-2 text-sm text-gray-500">{message}</p>
        <button
          className="mt-4 flex h-[40px] w-full shrink-0 items-center justify-center rounded-lg bg-[#1090E0] font-medium text-white transition-colors hover:bg-[#157CBE]"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundTeamPage;
