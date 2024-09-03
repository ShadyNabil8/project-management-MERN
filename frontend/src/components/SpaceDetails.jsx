import React from "react";
import { useParams } from "react-router-dom";
import { fetchSpace } from "../api";
import useFetchData from "../hooks/useFetchData";
import Breadcrumb from "./Breadcrumb";
import OutletHeader from "./OutletHeader";

const SpaceDetails = () => {
  const { spaceId } = useParams();

  const { data: space, isLoading } = useFetchData(["spaces", spaceId], () =>
    fetchSpace(spaceId),
  );

  return (
    <div>
      <OutletHeader>
        <Breadcrumb title={space?.name} image={space?.image} />
      </OutletHeader>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div> {`This is the summary of space${space?.id}`}</div>
      )}
    </div>
  );
};

export default SpaceDetails;
