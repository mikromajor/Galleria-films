import cl from './FilmsList.module.css';
import { ARR, FILM, BASE_IMG_URL } from "../../constants";


export  const deleteFromFavoriteList = (id: string, favoriteList: ARR | [] , setFavoriteList: React.Dispatch<React.SetStateAction<ARR | []>>): void => {
  if (favoriteList) {
    setFavoriteList(
      favoriteList.filter((o) => `${o.id}` !== id)
    );
    const card = document.getElementById(`card_${id}`);
    if (card) {
      card.classList.add("bg-primary");
      const remove = document.getElementById(
        `card_btn_remove_${id}`
      );
      remove?.classList.remove(cl.card_btn_remove);
      remove?.classList.add(cl.hidden);
    }
  }
};

 
export  const addToFavoriteList = (id: string,filmsData:  ARR | [], favoriteList:  ARR | [], setFavoriteList: React.Dispatch<React.SetStateAction<ARR | []>>): void => {
  //checking the same FILM
  if (!favoriteList) {
    setFavoriteList(filmsData.filter((o) => `${o.id}` === id));
  } else if (favoriteList.every((o) => `${o.id}` !== id)) {
    setFavoriteList([
      ...favoriteList,
      ...filmsData.filter((o) => `${o.id}` === id),
    ]);
  }
};
