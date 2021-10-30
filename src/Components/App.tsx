import { useState } from "react";
import { HeadMenu } from "./HeadMenu";
import CardsFilms from "./CardsFilms/CardsFilms";
// import {initVal} from '../constants'

function App() {
  const [cardsData, setCardsData] = useState(null);
  console.log("cardsData in App->", cardsData);

  return (
    <>
      <HeadMenu setCardsData={setCardsData} />
      {cardsData && <CardsFilms cardsData={cardsData} />}
    </>
  );
}

export default App;
