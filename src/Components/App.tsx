import { useState } from "react";
import { HeadMenu } from "./HeadMenu";
import CardsFilms from "./CardsFilms/CardsFilms";

function App() {
  const [cardsData, setCardsData] = useState(null);

  document.body.classList.add("bgBody");
  return (
    <>
      <HeadMenu setCardsData={setCardsData} />
      {cardsData && <CardsFilms cardsData={cardsData} />}
    </>
  );
}

export default App;
