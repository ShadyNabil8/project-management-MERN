import React from "react";
import Space from "./Space";
import { fetchSpaces } from "../api";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

const Spaces = () => {
  const { workspaceId } = useParams();
  const { data: spaces, isLoading } = useFetchData(
    ["spaces", workspaceId],
    () => fetchSpaces(workspaceId),
  );

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="mt-3 p-2">
      <span className="mb-3 block text-sm text-gray-400">Spaces</span>
      {spaces.map((space, index) => (
        <Space space={space} key={index}></Space>
      ))}
    </div>
  );
};

export default Spaces;
