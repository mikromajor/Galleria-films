import { API_URL, API_KEY, PATH_3 } from "../constants";
import { result } from "../constants";

async function getFetch(url: string) {
  console.log(url);

  if (!url) throw new Error("wrong url in request");

  const response = await fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}${PATH_3}${url}`
  );
  if (response.status === 204) {
    console.log("response.status === 204 (No content)");
    return;
  }
  if (!response.ok) {
    throw new Error(
      `Response status  fetch is: ${response.status}`
    );
  } else {
    const result: result = await response.json();
    console.log("in getFetch ->", result.results);

    return result.results;
  }
}
export default getFetch;
