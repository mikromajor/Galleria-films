import React, { useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { ARR, FILM, BASE_IMG_URL } from "../../constants";
import cl from "./FilmsList.module.css";

const CardsFilms = ({
  filmsData,
  favoriteList,
  setFavoriteList,
}: {
  filmsData: ARR | [];
  favoriteList: ARR | [];
  setFavoriteList: React.Dispatch<
    React.SetStateAction<ARR | []>
  >;
}) => {
  const [chosen, setChosen] = useState(null); // need add btn X -remove

  const expandCard = (id: string): void => {
    let d = document.querySelector(`#cardText_${id}`);
    d?.classList.toggle(cl.hidden);
  };

  if (!filmsData.length) {
    return (
      <h3 className={cl.center}>Please, choose genres</h3>
    );
  }

  const addToList = (id: number): void => {
    //checking the same FILM
    if (!favoriteList) {
      setFavoriteList(filmsData.filter((o) => o.id === id));
    } else if (favoriteList.every((el) => el.id !== id)) {
      setFavoriteList([
        ...favoriteList,
        ...filmsData.filter((o) => o.id === id),
      ]);
    }
  };

  return (
    <Row
      id='home'
      style={{
        justifyContent: "center",
        marginTop: "20px",
        paddingTop: "50px",
        backgroundColor: "#ccc",
      }}
    >
      {filmsData.map((cardData: FILM) => (
        <Card
          style={{ width: "20rem" }}
          bg={`primary ${cl.card_marg}`}
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
              <br />
              Counts {cardData.vote_count}
              <br />
              Release date {cardData.release_date}
              <br />
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
