import { useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { arr, film, BASE_IMG_URL } from "../../constants";
import cl from "./CardsFilms.module.css";

const CardsFilms = ({
  cardsData,
  list,
  setList,
}: {
  cardsData: arr | string;
  list: arr | [];
  setList: React.Dispatch<React.SetStateAction<arr | []>>;
}) => {
  console.log("list------>", list);

  const expandCard = (id: string): void => {
    let d = document.querySelector(`#cardText_${id}`);
    d?.classList.toggle(cl.hidden);
  };

  if (typeof cardsData === "string") {
    return <h3>{cardsData}</h3>;
  }
  const addToList = (id: number): void => {
    //checking the same film
    if (!list) {
      setList([...cardsData.filter((o) => o.id === id)]);
    } else if (list.every((el) => el.id !== id)) {
      setList([
        ...list,
        ...cardsData.filter((o) => o.id === id),
      ]);
    }
  };

  return (
    <Row style={{ justifyContent: "center" }}>
      {cardsData.map((cardData: film) => (
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
              Add to list
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
};
export default CardsFilms;

// <i className='fas fa-spin fa-spinner'></i>
// <i className='fas fa-cog'></i>
// <i className='fas fa-spin fa-cog'></i>
