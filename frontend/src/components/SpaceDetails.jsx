import React from "react";
import { useParams } from "react-router-dom";

const SpaceDetails = () => {
  const { spaceId } = useParams();
  return <div>{`This is the summary of space${spaceId}`}</div>;
};

export default SpaceDetails;
