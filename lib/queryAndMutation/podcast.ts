"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./querKeys";
import {
  fetchAPodcast,
  fetchSearchPodcast,
  fetchTopPodcast,
} from "../api/podcast";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const useFetchTopPodcast = () => {
  const count = useSelector((state: RootState) => state.podcast.value);
  const page = String(count);
  const per_page = "15";

  return useQuery({
    queryKey: [QUERY_KEYS.FETCH_TOP_PODCAST, { page, per_page }],
    queryFn: () =>
      fetchTopPodcast({
        queryKey: [QUERY_KEYS.FETCH_TOP_PODCAST, { page, per_page }],
      }),
  });
};

export const useFetchAPodcast = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.FETCH_A_PODCAST],
    queryFn: () => fetchAPodcast(),
  });
};

export const useFetchSearchPodcast = () => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const count = useSelector((state: RootState) => state.searchCount.value);
  const page = String(count);
  const per_page = "15";
  const search = searchValue;

  return useQuery({
    queryKey: [QUERY_KEYS.FETCH_SEARCH_PODCAST, { page, per_page, search }],
    queryFn: () =>
      fetchSearchPodcast({
        queryKey: [QUERY_KEYS.FETCH_SEARCH_PODCAST, { page, per_page, search }],
      }),
    enabled: !!search,
  });
};
