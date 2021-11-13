import { ARR } from "../../../constants";

const sorting = (
  keyWordSort: string,
  filmsList: [] | ARR,
  setFilmsList: React.Dispatch<
    React.SetStateAction<[] | ARR>
  >
) => {
  if (
    filmsList.length &&
    filmsList.every(
      (obj) =>
        typeof obj[keyWordSort] === "string" ||
        typeof obj[keyWordSort] === "number"
    )
  ) {
    setFilmsList(
      [...filmsList].sort((a, b): number => {
        if (typeof a[keyWordSort] === "string") {
          return a[keyWordSort] > b[keyWordSort] ? 1 : -1;
        } else if (typeof a[keyWordSort] === "number") {
          return a[keyWordSort] < b[keyWordSort] ? 1 : -1;
        } else {
          return 0;
        }
      })
    );
  }
};

export default sorting;
