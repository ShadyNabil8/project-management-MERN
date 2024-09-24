import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSpace } from "../api";
import useFetchData from "../hooks/useFetchData";
import SpaceBreadcrumb from "./SpaceBreadcrumb";
import { useHeader } from "../context/HeaderContext";
import { useAuth } from "../context/AuthContext";

const SpaceDetails = () => {
  const { spaceId, workspaceId } = useParams();
  const { setHeaderContent } = useHeader();
  const { user } = useAuth();

  const space = user.workspaces
    .find((workspace) => workspace._id === workspaceId)
    .spaces.find((space) => space._id === spaceId);

  useEffect(() => {
    setHeaderContent(<SpaceBreadcrumb space={space} />);
    return () => setHeaderContent(null);
  }, [space]);

  return (
    <div className="dark:bg-bg-color-dark-1">
      {" "}
      {`This is the summary of ${spaceId}`}
    </div>
  );
};

export default SpaceDetails;
