import { API_URL, API_KEY } from "../constants";

type obj = {};

async function getFetch(url: string) {
  if (!url) throw new Error("wrong url in request");

  const response = await fetch(`${API_URL}${url}?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error(`Response status in fetch is: ${response.status}`);
  } else {
    const result = await response.json();
    return result;
  }
}
export default getFetch;
