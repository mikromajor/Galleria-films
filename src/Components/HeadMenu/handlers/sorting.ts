import { ARR } from "../../../constants";

const sorting = (
  val: string,
  filmsList: [] | ARR,
  setFilmsList: React.Dispatch<
    React.SetStateAction<[] | ARR>
  >
) => {
  if (
    filmsList.length &&
    filmsList.every(
      (obj) =>
        typeof obj[val] === "string" ||
        typeof obj[val] === "number"
    )
  ) {
    setFilmsList(
      [...filmsList].sort((a, b): number => {
        if (typeof a[val] === "string") {
          return a[val] > b[val] ? 1 : -1;
        } else if (typeof a[val] === "number") {
          return a[val] < b[val] ? 1 : -1;
        } else {
          return 0;
        }
      })
    );
  }
};

export default sorting;
