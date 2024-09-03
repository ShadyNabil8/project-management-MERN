import { useQuery } from "@tanstack/react-query";

const useFetchData = (queryKey, queryFn) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryKey,
    queryFn: queryFn,
  });

  return { data, isLoading, isError, error };
};

export default useFetchData;
