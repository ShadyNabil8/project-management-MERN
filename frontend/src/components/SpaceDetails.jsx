import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSpace } from "../api";
import useFetchData from "../hooks/useFetchData";
import SpaceBreadcrumb from "./SpaceBreadcrumb";
import { useHeader } from "../context/HeaderContext";

const SpaceDetails = () => {
  const { spaceId } = useParams();
  const { setHeaderContent } = useHeader();

  const { data: space, isLoading } = useFetchData(["spaces", spaceId], () =>
    fetchSpace(spaceId),
  );

  useEffect(() => {
    setHeaderContent(<SpaceBreadcrumb space={space} />);
    return () => setHeaderContent(null);
  }, [space]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div> {`This is the summary of ${space?.name} ${space?.id}`}</div>
      )}
    </div>
  );
};

export default SpaceDetails;
