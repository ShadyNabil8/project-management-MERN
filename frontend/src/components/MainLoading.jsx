import React from "react";
import { waveGif } from "../assets/images";

const MainLoading = () => {
  return (
    <div className="absolute z-10 flex h-screen w-screen items-center justify-center overflow-hidden bg-white">
      <img src={waveGif}></img>
    </div>
  );
};

export default MainLoading;
