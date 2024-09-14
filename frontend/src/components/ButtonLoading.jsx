import React from "react";

const ButtonLoading = () => {
  return (
    <div className="flex gap-1">
      <span className="animate-grow animation-delay-0 inline-block size-3 rounded-[50%] bg-white"></span>
      <span className="animate-grow inline-block size-3 rounded-[50%] bg-white animation-delay-200"></span>
      <span className="animate-grow inline-block size-3 rounded-[50%] bg-white animation-delay-400"></span>
    </div>
  );
};

export default ButtonLoading;
