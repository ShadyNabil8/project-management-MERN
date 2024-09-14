import React from "react";
import { TiWarning } from "react-icons/ti";

const FormField = ({
  type,
  placeholder,
  label,
  error,
  value,
  icon,
  handleOnChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="self-start text-[12px] text-gray-900">{label}</label>
      <div className="relative flex flex-col gap-1">
        <div
          style={error ? { borderColor: "#dc4a3f" } : {}}
          className="flex h-[40px] w-full items-center rounded-lg border px-2"
        >
          <div
            style={error ? { color: "#dc4a3f" } : {}}
            className="text-xl text-[#c7c7c7]"
          >
            {icon}
          </div>
          <input
            className="w-full bg-transparent p-3 text-sm focus:outline-none"
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={handleOnChange}
          ></input>
        </div>
        {error && (
          <div className="absolute -bottom-5 flex items-center gap-1">
            <TiWarning className="text-[#dc4a3f]" />
            <span className="text-[13px] text-[#dc4a3f]">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormField;
