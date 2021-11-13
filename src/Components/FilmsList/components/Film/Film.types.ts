import { FILM } from "../../../../constants";

export type FilmProps = {
  film: FILM;
  isInFavorites: boolean;
  addToFavoriteList: (id: number) => void;
  deleteFromFavoriteList: (id: number) => void;
};

// (test as unknown) as string
