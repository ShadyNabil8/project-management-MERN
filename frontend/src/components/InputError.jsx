import React from "react";
import { TiWarning } from "react-icons/ti";

const InputError = ({ error }) => {
  return (
    <div className="absolute -bottom-5 flex items-center gap-1">
      <TiWarning className="text-[#dc4a3f]" />
      <span className="text-[13px] text-[#dc4a3f]">{error}</span>
    </div>
  );
};

export default InputError;
