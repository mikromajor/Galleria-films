import getFetch from "./getFetch";
import {
  API_URL,
  API_KEY,
  PATH_3,
  ARR,
} from "../constants";

const getMovies = (
  genres: string[],
  setFilmsData: React.Dispatch<
    React.SetStateAction<[] | ARR>
  >,
  setIsLoading: React.Dispatch<
    React.SetStateAction<boolean>
  >,
  sorting: (
    keyWord: string,
    filmsList: [] | ARR,
    setFilmsList: React.Dispatch<
      React.SetStateAction<[] | ARR>
    >
  ) => void,
  keyWordSort: string
) => {
  let url = "";

  if (genres.length) {
    url = `${API_URL}/discover/movie?api_key=${API_KEY}${PATH_3}&with_genres=${genres.join()}`;

    setIsLoading(true);
    const results = getFetch(url)
      .then((obj) => {
        setIsLoading(false);
        if (keyWordSort) {
          sorting(keyWordSort, obj.results, setFilmsData);
        } else {
          setFilmsData(obj.results);
        }
      })
      .catch((e) => console.log("ups!!!", e));
  } else {
    setFilmsData([]);
  }
};

export default getMovies;
