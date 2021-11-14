import { ARR } from "../../constants";

export type HeadMenuProps = {
  setFilmsData: React.Dispatch<React.SetStateAction<ARR>>;
  keyWordSort: string;
  setKeyWordSort: React.Dispatch<
    React.SetStateAction<string>
  >;
  setShowFavoriteList: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  showFavoriteList: boolean;
  favoriteList: ARR;
  setIsLoading: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};
