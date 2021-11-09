import { API_URL, API_KEY, PATH_3 } from "../constants";
import { RESULT } from "../constants";

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
    const RESULT: RESULT = await response.json();
    console.log("in getFetch ->", RESULT.results);

    return RESULT.results;
  }
}
export default getFetch;
