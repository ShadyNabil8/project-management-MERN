import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ListBreadcrumb from "./ListBreadcrumb";
import { useHeader } from "../context/HeaderContext";
import useFetchData from "../hooks/useFetchData";
import { getList } from "../api";
import TasksCollection from "./TasksCollection";

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
    <div className="bg-bg-color-light-1 dark:bg-bg-color-dark-1 p-8">
      <TasksCollection >
      </TasksCollection>
    </div>
  );
};

export default ListDetails;
