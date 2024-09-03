import { useQueryClient } from "@tanstack/react-query";

const useChahedData = (queryKey) => {
  const queryClient = useQueryClient();

  if (!queryKey) {
    console.warn("Invalid query key provided to useCachedData hook.");
    return null;
  }

  const cachedData = queryClient.getQueryData(queryKey);

  return cachedData;
};

export default useChahedData;
