import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./querKeys";
import { fetchTopPodcast } from "../api/podcast";

export const useFetchTopPodcast = () => {
  const page = "1";
  const per_page = "15";

  return useQuery({
    queryKey: [QUERY_KEYS.FETCH_TOP_PODCAST, { page, per_page }],
    queryFn: () =>
      fetchTopPodcast({
        queryKey: [QUERY_KEYS.FETCH_TOP_PODCAST, { page, per_page }],
      }),
  });
};
