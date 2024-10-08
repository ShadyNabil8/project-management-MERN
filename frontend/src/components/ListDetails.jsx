import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ListBreadcrumb from "./ListBreadcrumb";
import { useHeader } from "../context/HeaderContext";
import useFetchData from "../hooks/useFetchData";
import { getList } from "../api";

const ListDetails = () => {
  const { listId } = useParams();
  const { setHeaderContent } = useHeader();
  
  const { data: list, isLoading } = useFetchData(["lists", listId], async () =>
    getList(listId),
  );

  useEffect(() => {
    setHeaderContent(
      <ListBreadcrumb listName={list?.name} spaceName={list?.space?.name} />,
    );
    return () => setHeaderContent(null);
  }, [list]);

  return (
    <div className="dark:bg-bg-color-dark-1">{`This is the summary of list`}</div>
  );
};

export default ListDetails;
