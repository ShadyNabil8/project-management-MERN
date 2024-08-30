import React from "react";

const LoginBtn = () => {
  return (
    <div className="border flex gap-2 p-1 w-fit rounded-lg border-[#B9B4C7]">
      <button className="hover:bg-gray-200 rounded-md p-1 text-base text-zinc-800">
        Log in
      </button>
      <button className=" rounded-md p-1  bg-gradient-to-r from-[#7F00FF] to-[#E100FF] text-white font-bold">
        Sign Up
      </button>
    </div>
  );
};

export default LoginBtn;
