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
        console.log("in getMovies--->", obj.results);

        sorting(keyWordSort, obj.results, setFilmsData);
      })
      .catch((e) => console.log("ups!!!", e));
  } else {
    setFilmsData([]);
  }
};

export default getMovies;
