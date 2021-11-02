import { useState } from "react";
import { HeadMenu } from "./HeadMenu";
import CardsFilms from "./CardsFilms/CardsFilms";

//import "@fortawesome/fontawesome-free/css/all.css";
//
//перед bootstrap из pack.json
// "@fortawesome/fontawesome-free": "^5.15.4",
//     "@testing-library/jest-dom": "^5.14.1",
//     "@testing-library/react": "^11.2.7",
//     "@testing-library/user-event": "^12.8.3",

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
