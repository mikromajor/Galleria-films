import { useState } from "react";
import { HeadMenu } from "./HeadMenu";
import FavoriteList from "./FavoriteList/FavoriteList";
import FilmsList from "./FilmsList/FilmsList";
import { ARR } from "../constants";
import { Loader } from "./UI";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [keyWordSort, setKeyWordSort] =
    useState<string>("");
  const [filmsData, setFilmsData] = useState<ARR>([]);
  const [favoriteList, setFavoriteList] = useState<ARR>([]);
  const [showFavoriteList, setShowFavoriteList] =
    useState(false);
  console.log();

  return (
    <>
      <HeadMenu
        setFilmsData={setFilmsData}
        setIsLoading={setIsLoading}
        keyWordSort={keyWordSort}
        setKeyWordSort={setKeyWordSort}
        setShowFavoriteList={setShowFavoriteList}
        showFavoriteList={showFavoriteList}
        favoriteList={favoriteList} //set counter
      />
      {isLoading ? (
        <Loader />
      ) : showFavoriteList ? (
        <FavoriteList
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
        />
      ) : (
        <FilmsList
          filmsData={filmsData}
          setFilmsData={setFilmsData}
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
          keyWordSort={keyWordSort}
          isLoading={isLoading}
        />
      )}
    </>
  );
}

export default App;
