import React from "react";
import { arr, sortInitType } from "../../constants";
import { FilmsList, FavoriteList } from "./components";

const Content = ({
  filmsData,
  favoriteList,
  setFavoriteList,
  showFavoriteList,
  sort,
}: {
  filmsData: arr | string;
  favoriteList: arr | [];
  setFavoriteList: React.Dispatch<
    React.SetStateAction<arr | []>
  >;
  showFavoriteList: boolean;
  sort: sortInitType;
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
