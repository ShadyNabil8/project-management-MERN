import React from "react";
import { developerImage } from "../assets/images";

const MainLoading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-white">
      <span className="animation-delay-100 mr-6 size-14 animate-bounce rounded-full bg-[#FF7120]"></span>
      <span className="animation-delay-200 mr-6 size-14 animate-bounce rounded-full bg-[#FF8E07]"></span>
      <span className="animation-delay-300 mr-6 size-14 animate-bounce rounded-full bg-[#FF4D41]"></span>
      <span className="animation-delay-400 mr-6 size-14 animate-bounce rounded-full bg-[#FF2861]"></span>
      <span className="animation-delay-500 mr-6 size-14 animate-bounce rounded-full bg-[#FF0082]"></span>
    </div>
  );
};

export default MainLoading;
