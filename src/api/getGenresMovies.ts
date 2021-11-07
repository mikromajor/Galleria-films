import getFetch from "./getFetch";
import { result } from "../constants";

const getGenresMovies = (
  genres: string[],
  setFilmsData: (result: any) => any
) => {
  let url = "";

  if (genres.length) {
    url = "&with_genres=" + genres.join();
    const arrResults = getFetch(url)
      .then((arr_20_Obj) => setFilmsData(arr_20_Obj))
      .catch((e) => console.log("ups!!!", e));
  } else {
    setFilmsData("Please choose genre");
  }
};

export default getGenresMovies;
