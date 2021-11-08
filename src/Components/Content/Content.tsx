import React from "react";
import { arr } from "../../constants";
import { FilmsList, FavoriteList } from "./components";

const Content = ({
  filmsData,
  favoriteList,
  setFavoriteList,
  showFavoriteList,
}: {
  filmsData: arr | string;
  favoriteList: arr | [];
  setFavoriteList: React.Dispatch<
    React.SetStateAction<arr | []>
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
