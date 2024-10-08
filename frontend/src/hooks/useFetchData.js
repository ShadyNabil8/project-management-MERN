import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useFetchData = (queryKey, queryFn) => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({ queryKey, queryFn });

  useEffect(() => {
    if (!isLoading && error) {
      console.log(error);
      navigate("/not-found-team", {
        state: {
          message:
            error.status !== 500
              ? error.response?.data?.message
              : "You don’t have access to this link or this link is invalid.",
        },
      });
    }
  }, [isLoading, error, data]);

  return { data, isLoading, error };
};

export default useFetchData;
