import React, { useState } from "react";
import Space from "./Space";
import { fetchSpaces } from "../api";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { CiGrid41 } from "react-icons/ci";
const Spaces = () => {
  const { workspaceId } = useParams();
  const [isVisibleSpaces, setIisVisibleSpaces] = useState(false);
  const { data: spaces, isLoading } = useFetchData(
    ["spaces", workspaceId],
    () => fetchSpaces(workspaceId),
  );

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center p-3 lg:items-start">
      <div
        className="block cursor-pointer rounded-md bg-[#ceeafd] p-1 lg:hidden"
        onClick={() => setIisVisibleSpaces((prev) => !prev)}
      >
        <CiGrid41 className="text-[20px] text-[#046eb0]" />
      </div>
      <div
        className={`${isVisibleSpaces ? "-translate-x-[calc(100%+50px)]" : "translate-x-0"} absolute left-[50px] top-[40px] h-[calc(100%-40px)] min-w-[300px] transform bg-[#F7F8F9] p-2 shadow-[4px_0_8px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out lg:static lg:min-w-fit lg:translate-x-0 lg:p-0 lg:shadow-none`}
      >
        <span className="mb-1 block text-[13px] text-gray-500">Spaces</span>
        {spaces.map((space, index) => (
          <Space space={space} key={index}></Space>
        ))}
      </div>
    </div>
  );
};

export default Spaces;
