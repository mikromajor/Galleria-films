import { ARR } from "../../../constants";

const sorting = (
  val: string,
  filmsData: [] | ARR,
  setFilmsData: React.Dispatch<
    React.SetStateAction<[] | ARR>
  >,
  favoriteList: [] | ARR,
  setFavoriteList: React.Dispatch<
    React.SetStateAction<ARR | []>
  >
) => {
  if (
    filmsData.length &&
    filmsData.every(
      (obj) =>
        typeof obj[val] === "string" ||
        typeof obj[val] === "number"
    )
  ) {
    setFilmsData(
      [...filmsData].sort((a, b): number => {
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
