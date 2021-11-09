import { useState } from "react";
import { HeadMenu } from "./HeadMenu";
import Content from "./Content/Content";
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
  document.body.classList.add("bgBody");

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

      <Content
        filmsData={filmsData}
        favoriteList={favoriteList}
        setFavoriteList={setFavoriteList}
        showFavoriteList={showFavoriteList}
      />
    </>
  );
}

export default App;
//не коректно работает select in DropdownSort
