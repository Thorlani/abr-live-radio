import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./querKeys";
import { fetchTopCategory } from "../api/category";

export const useFetchTopCategory = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.FETCH_TOP_CATEGORY],
    queryFn: () =>
      fetchTopCategory({
        queryKey: [QUERY_KEYS.FETCH_TOP_CATEGORY],
      }),
  });
};
