import config from "@/config";
import axios from "axios";

async function fetchTopCategory() {
  
  const url = new URL(`${config.WOKPA_TOP_CATEGORIES}`);

  try {
    const response = await axios.get(url.toString());
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export { fetchTopCategory };
