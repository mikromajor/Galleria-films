import getFetch from "./getFetch";
import {
  API_URL,
  API_KEY,
  PATH_3,
  ARR,
} from "../constants";

const getGenresMovies = (
  genres: string[],
  setFilmsData: React.Dispatch<
    React.SetStateAction<[] | ARR>
  >
) => {
  let url = "";

  if (genres.length) {
    url = `${API_URL}/discover/movie?api_key=${API_KEY}${PATH_3}&with_genres=${genres.join()}`;
    const results = getFetch(url)
      .then((obj) => setFilmsData(obj.results))
      .catch((e) => console.log("ups!!!", e));
  } else {
    setFilmsData([]);
  }
};

export default getGenresMovies;
