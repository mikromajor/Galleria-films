import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import {
  ARR,
  FILM,
  BASE_IMG_URL,
} from "../../../../constants";
import cl from "./FilmsList.module.css";

const CardsFilms = ({
  filmsData,
  favoriteList,
  setFavoriteList,
}: {
  filmsData: ARR | string;
  favoriteList: ARR | [];
  setFavoriteList: React.Dispatch<
    React.SetStateAction<ARR | []>
  >;
}) => {
  document.body.style.backgroundColor = "grey";
  const expandCard = (id: string): void => {
    let d = document.querySelector(`#cardText_${id}`);
    d?.classList.toggle(cl.hidden);
  };

  if (typeof filmsData === "string") {
    return <h3>{filmsData}</h3>;
  }
  const addToList = (id: number): void => {
    //checking the same FILM
    if (!favoriteList) {
      setFavoriteList([
        ...filmsData.filter((o) => o.id === id),
      ]);
    } else if (favoriteList.every((el) => el.id !== id)) {
      setFavoriteList([
        ...favoriteList,
        ...filmsData.filter((o) => o.id === id),
      ]);
    }
  };

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingTop: "50px",
      }}
    >
      {filmsData.map((cardData: FILM) => (
        <Card
          style={{ width: "20rem" }}
          bg={`secondary ${cl.card_marg}`}
          key={cardData.id}
        >
          <Card.Img
            variant='top'
            src={`${BASE_IMG_URL}${cardData.poster_path}`}
          />
          <Card.Body>
            <Card.Title>{cardData.title}</Card.Title>
            <Card.Subtitle className='mb-2'>
              Vote average {cardData.vote_average}
            </Card.Subtitle>
            <Card.Subtitle>
              Counts {cardData.vote_count}
            </Card.Subtitle>
            <Card.Subtitle>
              Release date {cardData.release_date}
            </Card.Subtitle>
            <Card.Text
              className={cl.hidden}
              id={`cardText_${cardData.id}`}
            >
              {cardData.overview}
            </Card.Text>

            <Button
              className={cl.card_btn_expand}
              value={cardData.id}
              variant='dark'
              onClick={(e) => {
                expandCard(e.currentTarget.value);
              }}
            >
              Expand
            </Button>
            <Button
              className={cl.card_btn_addList}
              variant='success'
              value={cardData.id}
              onClick={(e) => {
                addToList(Number(e.currentTarget.value));
              }}
            >
              Add to favoriteList
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
};
export default CardsFilms;
