import getFetch from "./getFetch";
import {
  API_URL,
  API_KEY,
  PATH_3,
  ARR,
} from "../constants";

const getMovies = (
  genres: string[],
  setFilmsData: React.Dispatch<React.SetStateAction<ARR>>,
  setIsLoading: React.Dispatch<
    React.SetStateAction<boolean>
  >
) => {
  let url = "";
  console.log("getMovies fire, genres are ->", genres);

  if (genres.length) {
    url = `${API_URL}/discover/movie?api_key=${API_KEY}${PATH_3}&with_genres=${genres.join()}`;

    setIsLoading(true);
    getFetch(url)
      .then((obj) => {
        console.log("in getMovies--->", obj.results);
        setFilmsData(obj.results);
        setIsLoading(false);
      })
      .catch((e) => console.log("ups!!!", e));
  } else {
    //print: 'please choose genre'
    setFilmsData([]);
  }
};

export default getMovies;
