import { useState } from "react";
import { HeadMenu } from "./HeadMenu";
import FavoriteList from "./FavoriteList/FavoriteList";
import FilmsList from "./FilmsList/FilmsList";
import { ARR } from "../constants";

function App() {
  const [filmsData, setFilmsData] = useState<ARR | string>(
    ""
  );
  const [favoriteList, setFavoriteList] = useState<
    ARR | []
  >([]);
  const [showFavoriteList, setShowFavoriteList] =
    useState(false);

  return (
    <>
      <HeadMenu
        filmsData={filmsData}
        setFilmsData={setFilmsData}
        setShowFavoriteList={setShowFavoriteList}
        showFavoriteList={showFavoriteList}
        favoriteList={favoriteList}
        setFavoriteList={setFavoriteList}
      />

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
}

export default App;
//не коректно работает select in DropdownSort
