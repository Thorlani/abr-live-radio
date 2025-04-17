"use client"
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./querKeys";
import {
  fetchAnEpisode,
  fetchLatestEpisode,
  fetchPodcastEpisode,
  fetchTrendingEpisode,
} from "../api/episode";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const useFetchTrendingEpisode = () => {
  const count = useSelector((state: RootState) => state.episode.value);
  const page = count;
  const per_page = "15";

  return useQuery({
    queryKey: [QUERY_KEYS.FETCH_TRENDING_EPISODE, { page, per_page }],
    queryFn: () =>
      fetchTrendingEpisode({
        queryKey: [QUERY_KEYS.FETCH_TRENDING_EPISODE, { page, per_page }],
      }),
  });
};
export const useFetchPodcastEpisode = () => {
  const count = useSelector((state: RootState) => state.podcastEpisode.value);
  const page = count;
  const per_page = "15";

  return useQuery({
    queryKey: [QUERY_KEYS.FETCH_PODCAST_EPISODE, { page, per_page }],
    queryFn: () =>
      fetchPodcastEpisode({
        queryKey: [QUERY_KEYS.FETCH_PODCAST_EPISODE, { page, per_page }],
      }),
  });
};

export const useFetchAnEpisode = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.FETCH_AN_EPISODE],
    queryFn: () => fetchAnEpisode(),
  });
};

export const useFetchLatestEpisode = () => {
  const count = useSelector((state: RootState) => state.latestEpisode.value);
  const page = count;
  const per_page = "15";

  return useQuery({
    queryKey: [QUERY_KEYS.FETCH_LATEST_EPISODE, { page, per_page }],
    queryFn: () =>
      fetchLatestEpisode({
        queryKey: [QUERY_KEYS.FETCH_LATEST_EPISODE, { page, per_page }],
      }),
  });
};
