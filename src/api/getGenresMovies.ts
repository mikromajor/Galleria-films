import getFetch from "./getFetch";
import { objGenres, result } from "../constants";

const getGenresMovies = (
  objGenres: objGenres,
  setCardsData: (result: any) => any
) => {
  let url = "";
  let chechSameUrl = "";
  let sum = [];
  for (const [key, value] of Object.entries(objGenres)) {
    if (value) sum.push(key);
  }

  if (sum.length) {
    console.log("now url look like -> ", url);
    url = "&with_genres=" + sum.join();
    if (chechSameUrl !== url) {
      chechSameUrl = url;
      const arrResults = getFetch(url)
        .then((obj) => obj)
        .catch((e) => console.log("ups!!!", e));
      setCardsData(arrResults);
    } else {
      console.log("Choosed the same genre");
    }
  } else {
    console.log("No choozed genre");
  }
};

export default getGenresMovies;
