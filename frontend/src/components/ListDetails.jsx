import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { fetchList, fetchSpace } from "../api";
import OutletHeader from "./OutletHeader";
import ListBreadcrumb from "./ListBreadcrumb";
import { useHeader } from "../context/HeaderContext";

const ListDetails = () => {
  const { listId, spaceId } = useParams();
  const { setHeaderContent } = useHeader();

  const { data: space } = useFetchData(["spaces", spaceId], () =>
    fetchSpace(spaceId),
  );
  const { data: list, isLoading: isListLoading } = useFetchData(
    ["lists", listId],
    () => fetchList(listId),
  );

  useEffect(() => {
    setHeaderContent(<ListBreadcrumb list={list} space={space} />);
    return () => setHeaderContent(null);
  }, [list]);

  return (
    <div className="flex flex-col">
      {isListLoading ? (
        <div>Loading...</div>
      ) : (
        <div>{`This is the summary of list${list?.id}`}</div>
      )}
    </div>
  );
};

export default ListDetails;
