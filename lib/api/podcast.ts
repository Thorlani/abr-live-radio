import config from "@/config";
import axios from "axios";

async function fetchTopPodcast(queryObj: {
  queryKey: [string, { page?: string; per_page?: string }];
}) {
  const page = queryObj?.queryKey[1]?.page || "";
  const per_page = queryObj?.queryKey[1]?.per_page || "";
  const url = new URL(`${config.WOKPA_TOP_PODCAST}`);
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

async function fetchAPodcast() {
  const url = new URL(`${config.WOKPA_PODCAST}`);

  try {
    const response = await axios.get(url.toString());
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function fetchSearchPodcast(queryObj: {
  queryKey: [string, { page?: string; per_page?: string; search?: string }];
}) {
  const search = queryObj?.queryKey[1]?.search || "";
  const page = queryObj?.queryKey[1]?.page || "";
  const per_page = queryObj?.queryKey[1]?.per_page || "";
  const url = new URL(`${config.WOKPA_PODCAST_SEARCH}`);

  if (search) {
    url.searchParams.append("search", search);
  }
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

export { fetchTopPodcast, fetchAPodcast, fetchSearchPodcast };
