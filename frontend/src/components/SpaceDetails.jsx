import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import SpaceBreadcrumb from "./SpaceBreadcrumb";
import { useHeader } from "../context/HeaderContext";
import { getSpace } from "../api";

const SpaceDetails = () => {
  const { spaceId } = useParams();
  const { setHeaderContent } = useHeader();

  const { data: space, isLoading } = useFetchData(
    ["spaces", spaceId],
    async () => getSpace(spaceId),
  );

  useEffect(() => {
    setHeaderContent(
      <div className="cursor-default">
        <SpaceBreadcrumb spaceName={space?.name} />
      </div>,
    );
    return () => setHeaderContent(null);
  }, [space]);

  useEffect(() => {
    console.log(spaceId);
  }, [spaceId]);
  useEffect(() => {
    console.log(space);
  }, [space]);

  return (
    <div className="dark:bg-bg-color-dark-1">
      {" "}
      {`This is the summary of ${spaceId}`}
    </div>
  );
};

export default SpaceDetails;
