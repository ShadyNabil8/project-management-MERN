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

  // useEffect(() => {
  //   setHeaderContent(<ListBreadcrumb list={list} space={space} />);
  //   return () => setHeaderContent(null);
  // }, [list]);

  return <div>{`This is the summary of list${listId}`}</div>;
};

export default ListDetails;
