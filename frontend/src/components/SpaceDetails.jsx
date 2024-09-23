import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSpace } from "../api";
import useFetchData from "../hooks/useFetchData";
import SpaceBreadcrumb from "./SpaceBreadcrumb";
import { useHeader } from "../context/HeaderContext";

const SpaceDetails = () => {
  const { spaceId, workspaceId } = useParams();
  const { setHeaderContent } = useHeader();

  // useEffect(() => {
  //   setHeaderContent(<SpaceBreadcrumb space={space} />);
  //   return () => setHeaderContent(null);
  // }, [space]);

  return <div> {`This is the summary of ${spaceId}`}</div>;
};

export default SpaceDetails;
