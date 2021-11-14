import { useCallback, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Film } from "./components";
import { FilmsListProps } from "./FilmList.Types";
import sorting from "./hendlers/sorting";
import cl from "./FilmsList.module.css";
const CardsFilms = ({
  filmsData,
  setFilmsData,
  favoriteList,
  setFavoriteList,
  keyWordSort,
  isLoading,
}: FilmsListProps) => {
  useEffect(() => {
    if (!isLoading) {
      sorting(keyWordSort, filmsData, setFilmsData);
      sorting(keyWordSort, favoriteList, setFavoriteList);
    }
  }, [keyWordSort, isLoading]);

  const deleteFromFavoriteList = useCallback(
    (id: number) => {
      // option 1
      // setFavoriteList( favoriteList.filter(
      //   (o) => o.id !== id
      // ));
      // option 2
      setFavoriteList((prevState) =>
        prevState.filter((o) => o.id !== id)
      );
    },
    [setFavoriteList]
  );

  const addToFavoriteList = useCallback(
    (id: number) => {
      const currentFilm = filmsData.filter(
        (o) => o.id === id
      );

      if (!favoriteList.length) {
        setFavoriteList(currentFilm);
        //checking the same FILM
      }
      if (favoriteList.every((o) => o.id !== id)) {
        setFavoriteList([...favoriteList, ...currentFilm]);
      }
    },
    [filmsData, favoriteList, setFavoriteList]
  );

  return !filmsData.length ? (
    <h3 className={cl.center}>Please, choose genres</h3>
  ) : (
    <Row
      id='home'
      style={{
        justifyContent: "center",
        marginTop: "20px",
        paddingTop: "50px",
        backgroundColor: "#F8FFAF",
      }}
    >
      {filmsData.map((cardData) => {
        const isInFavoritesArr = favoriteList.filter(
          (film) => film.id === cardData.id
        );
        const isInFavorites = !!isInFavoritesArr.length;

        return (
          <Film
            key={cardData.id}
            film={cardData}
            isInFavorites={isInFavorites}
            deleteFromFavoriteList={deleteFromFavoriteList}
            addToFavoriteList={addToFavoriteList}
          />
        );
      })}
    </Row>
  );
};
export default CardsFilms;
