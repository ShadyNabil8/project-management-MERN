import React from "react";
import { useParams } from "react-router-dom";

const ListDetails = () => {
  const { listId } = useParams();
  return (
    <div>
      <div>{`This is the summary of list${listId}`}</div>
    </div>
  );
};

export default ListDetails;
