import { useState } from "react";
import { HeadMenu } from "./HeadMenu";
import Content from "./Content/Content";
import { arr } from "../constants";

function App() {
  const [filmsData, setFilmsData] = useState<arr | string>(
    ""
  );
  const [favoriteList, setFavoriteList] = useState<
    arr | []
  >([]);
  const [showFavoriteList, setShowFavoriteList] =
    useState(false);
  const [sort, setSort] = useState("");

  document.body.classList.add("bgBody");
  console.log("sort--------->", sort);

  return (
    <>
      <HeadMenu
        setFilmsData={setFilmsData}
        setShowFavoriteList={setShowFavoriteList}
        showFavoriteList={showFavoriteList}
        sort={sort}
        setSort={setSort}
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
