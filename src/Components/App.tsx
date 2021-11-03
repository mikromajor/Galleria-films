import { useState } from "react";
import { HeadMenu } from "./HeadMenu";
import CardsFilms from "./CardsFilms/CardsFilms";
import MyList from "./MyList/MyList";
import { arr } from "../constants";

function App() {
  const [cardsData, setCardsData] = useState(null);
  const [list, setList] = useState<arr | []>([]);
  const [showList, setShowList] = useState(false);
  console.log("showList", showList);

  document.body.classList.add("bgBody");
  return (
    <>
      <HeadMenu
        setCardsData={setCardsData}
        setShowList={setShowList}
        showList={showList}
      />
      {!showList && cardsData && (
        <CardsFilms
          cardsData={cardsData}
          list={list}
          setList={setList} //add
        />
      )}
      {showList && (
        <MyList
          list={list}
          setList={setList} //delete
        />
      )}
    </>
  );
}

export default App;
