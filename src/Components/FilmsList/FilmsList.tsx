import { useEffect } from "react";
import {
  Card,
  Row,
  Button,
  CloseButton,
} from "react-bootstrap";
import { ARR, FILM, BASE_IMG_URL } from "../../constants";
import {
  deleteFromFavoriteList,
  addToFavoriteList,
} from "./handlers";
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
  useEffect(() => {
    favoriteList.forEach((o) => {
      const card = document.getElementById(`card_${o.id}`);
      if (card) {
        card.classList.remove("bg-primary");
        card.style.backgroundColor = "rgb(25,125,84)";
        const remove = document.getElementById(
          `card_btn_remove_${o.id}`
        );
        remove?.classList.remove(cl.hidden);
        remove?.classList.add(cl.card_btn_remove);
      }
    });
  }, [favoriteList, setFavoriteList]);

  const expandCard = (id: string): void => {
    let d = document.querySelector(`#cardText_${id}`);
    d?.classList.toggle(cl.hidden);
  };

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
      {filmsData.map((cardData: FILM) => (
        <Card
          style={{ width: "20rem" }}
          bg={`primary ${cl.card_marg}`}
          key={cardData.id}
          id={"card_" + cardData.id}
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
                addToFavoriteList(
                  e.currentTarget.value,
                  filmsData,
                  favoriteList,
                  setFavoriteList
                );
              }}
            >
              Add to favoriteList
            </Button>
            <CloseButton
              style={{ border: "3px solid red" }}
              variant='white'
              id={`card_btn_remove_${cardData.id}`}
              className={cl.hidden}
              value={cardData.id}
              onClick={(e) =>
                deleteFromFavoriteList(
                  e.currentTarget.value,
                  favoriteList,
                  setFavoriteList
                )
              }
            />
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
};
export default CardsFilms;
