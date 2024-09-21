import React, { useState } from "react";
import { waveGif } from "../assets/images";
import { getRandomQuote } from "../utils/utils";

const MainLoading = () => {
  const [randomQuote, setRandomQuote] = useState(getRandomQuote());

  return (
    <div className="absolute z-10 h-screen w-screen overflow-hidden bg-white">
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 bg-white p-5">
        <img src={waveGif} className="size-[200px] md:size-[300px]"></img>
        <p className="text-center text-[24px] text-gray-700 md:text-[38px]">
          {randomQuote.quote}
        </p>
        <p className="text-[18px] text-gray-700 md:text-[32px]">
          {randomQuote.author}
        </p>
      </div>
    </div>
  );
};
export default MainLoading;
