import React from "react";
import { developerImage } from "../assets/images";

const MainLoading = () => {
  return (
    <div className="absolute z-10 flex h-screen w-screen items-center justify-center overflow-hidden bg-white">
      <span className="mr-6 size-14 animate-bounce rounded-full bg-[#FF7120] animation-delay-100"></span>
      <span className="mr-6 size-14 animate-bounce rounded-full bg-[#FF8E07] animation-delay-200"></span>
      <span className="mr-6 size-14 animate-bounce rounded-full bg-[#FF4D41] animation-delay-300"></span>
      <span className="mr-6 size-14 animate-bounce rounded-full bg-[#FF2861] animation-delay-400"></span>
      <span className="mr-6 size-14 animate-bounce rounded-full bg-[#FF0082] animation-delay-500"></span>
    </div>
  );
};

export default MainLoading;
