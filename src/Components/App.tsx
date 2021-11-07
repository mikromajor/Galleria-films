import { useState } from "react";
import { HeadMenu } from "./HeadMenu";
import Content from "./Content/Content";
import { arr, sortInit } from "../constants";

function App() {
  const [filmsData, setFilmsData] = useState<arr | string>(
    ""
  );
  const [favoriteList, setFavoriteList] = useState<
    arr | []
  >([]);
  const [showFavoriteList, setShowFavoriteList] =
    useState(false);
  const [sort, setSort] = useState(sortInit);

  document.body.classList.add("bgBody");
  return (
    <>
      <HeadMenu
        setFilmsData={setFilmsData}
        setShowFavoriteList={setShowFavoriteList}
        showFavoriteList={showFavoriteList}
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
