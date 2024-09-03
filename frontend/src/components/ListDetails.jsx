import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { fetchList, fetchSpace } from "../api";
import OutletHeader from "./OutletHeader";
import BreadcrumbSeparator from "./BreadcrumbSeparator";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbLink from "./BreadcrumbLink";

const ListDetails = () => {
  const { listId, spaceId, workspaceId } = useParams();

  const { data: space } = useFetchData(["spaces", spaceId], () =>
    fetchSpace(spaceId),
  );
  const { data: list, isLoading: isListLoading } = useFetchData(
    ["lists", listId],
    () => fetchList(listId),
  );

  return (
    <div className="flex flex-col">
      <OutletHeader>
        <BreadcrumbLink
          title={space?.name}
          image={space?.image}
          to={`/${workspaceId}/space/${space?.id}`}
        />
        <BreadcrumbSeparator />
        <Breadcrumb title={list?.name} image={list?.image} />
      </OutletHeader>
      {isListLoading ? (
        <div>Loading...</div>
      ) : (
        <div>{`This is the summary of list${list?.id}`}</div>
      )}
    </div>
  );
};

export default ListDetails;
