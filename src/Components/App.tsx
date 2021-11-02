import { useState } from "react";
import { HeadMenu } from "./HeadMenu";
import CardsFilms from "./CardsFilms/CardsFilms";
import { MyList } from "./MyList";

function App() {
  const [cardsData, setCardsData] = useState(null);
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
      {cardsData && <CardsFilms cardsData={cardsData} />}
      {showList && <MyList />}
    </>
  );
}

export default App;
