import { ARR } from "../../constants";

export type FilmsListProps = {
  filmsData: ARR;
  setFilmsData: React.Dispatch<React.SetStateAction<ARR>>;
  favoriteList: ARR;
  setFavoriteList: React.Dispatch<
    React.SetStateAction<ARR>
  >;
  keyWordSort: string;
  isLoading: boolean;
};
