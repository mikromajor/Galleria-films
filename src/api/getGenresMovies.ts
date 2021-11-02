import getFetch from "./getFetch";
import { result } from "../constants";

const getGenresMovies = (
  genres: string[],
  setCardsData: (result: any) => any
) => {
  let url = "";

  if (genres.length) {
    url = "&with_genres=" + genres.join();
    const arrResults = getFetch(url)
      .then((arr_20_Obj) => setCardsData(arr_20_Obj))
      .catch((e) => console.log("ups!!!", e));
  } else {
    setCardsData("Please choose genre");
  }
};

export default getGenresMovies;
