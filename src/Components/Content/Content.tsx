import React from "react";
import { ARR } from "../../constants";
import { FilmsList, FavoriteList } from "./components";

const Content = ({
  filmsData,
  favoriteList,
  setFavoriteList,
  showFavoriteList,
}: {
  filmsData: ARR | string;
  favoriteList: ARR | [];
  setFavoriteList: React.Dispatch<
    React.SetStateAction<ARR | []>
  >;
  showFavoriteList: boolean;
}) => {
  return (
    <>
      {showFavoriteList ? (
        <FavoriteList
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
        />
      ) : (
        <FilmsList
          filmsData={filmsData}
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
        />
      )}
    </>
  );
};
export default Content;
