import React, { useState } from "react";
import { waveGif } from "../assets/images";
import { getRandomQuote } from "../utils/utils";

const MainLoading = () => {
  const [randomQuote, setRandomQuote] = useState(getRandomQuote());

  return (
    <div className="absolute z-50 h-screen w-screen overflow-hidden bg-bg-color-light-1 dark:bg-bg-color-dark-1">
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 bg-white p-5 dark:bg-bg-color-dark-1">
        <img src={waveGif} className="size-[200px] md:size-[300px]"></img>
        <p className="normal-text-color text-center text-[24px] md:text-[38px]">
          {randomQuote.quote}
        </p>
        <p className="normal-text-color text-[18px] md:text-[32px]">
          {randomQuote.author}
        </p>
      </div>
    </div>
  );
};
export default MainLoading;
