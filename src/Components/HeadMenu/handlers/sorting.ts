import { ARR } from "../../../constants";

const sorting = (
  keyWordSort: string,
  filmsList: [] | ARR,
  setFilmsList: React.Dispatch<
    React.SetStateAction<[] | ARR>
  >
) => {
  if (
    keyWordSort &&
    filmsList.length &&
    filmsList.every(
      (obj) =>
        typeof obj[keyWordSort] === "string" || "number"
    )
  ) {
    setFilmsList(
      [...filmsList].sort((a, b): number => {
        if (keyWordSort === "original_title") {
          return a[keyWordSort] > b[keyWordSort] ? 1 : -1;
        } else if (
          keyWordSort === "release_date" ||
          "vote_average" ||
          "vote_count"
        ) {
          return a[keyWordSort] < b[keyWordSort] ? 1 : -1;
        } else {
          return 0;
        }
      })
    );
  } else {
    setFilmsList([...filmsList]);
  }
};

export default sorting;
