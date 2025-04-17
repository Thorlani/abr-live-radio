import config from "@/config";
import axios from "axios";

async function fetchTrendingEpisode(queryObj: {
  queryKey: [string, { page?: string; per_page?: string }];
}) {
  const page = queryObj?.queryKey[1]?.page || "";
  const per_page = queryObj?.queryKey[1]?.per_page || "";
  const url = new URL(`${config.WOKPA_TRENDING_EPISODES}`);
  if (page) {
    url.searchParams.append("page", page);
  }
  if (per_page) {
    url.searchParams.append("per_page", per_page);
  }
  try {
    const response = await axios.get(url.toString());
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function fetchPodcastEpisode(queryObj: {
  queryKey: [string, { page?: string; per_page?: string }];
}) {
  const page = queryObj?.queryKey[1]?.page || "";
  const per_page = queryObj?.queryKey[1]?.per_page || "";
  const url = new URL(`${config.WOKPA_PODCAST_EPISODE}`);
  if (page) {
    url.searchParams.append("page", page);
  }
  if (per_page) {
    url.searchParams.append("per_page", per_page);
  }
  try {
    const response = await axios.get(url.toString());
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function fetchAnEpisode() {
  const url = new URL(`${config.WOKPA_EPISODE}`);

  try {
    const response = await axios.get(url.toString());
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function fetchLatestEpisode(queryObj: {
  queryKey: [string, { page?: string; per_page?: string }];
}) {
  const page = queryObj?.queryKey[1]?.page || "";
  const per_page = queryObj?.queryKey[1]?.per_page || "";
  const url = new URL(`${config.WOKPA_LATEST_EPISODE}`);

  if (page) {
    url.searchParams.append("page", page);
  }
  if (per_page) {
    url.searchParams.append("per_page", per_page);
  }
  try {
    const response = await axios.get(url.toString());
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export {
  fetchTrendingEpisode,
  fetchPodcastEpisode,
  fetchAnEpisode,
  fetchLatestEpisode,
};
