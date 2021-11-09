import { Card, Row, Button } from "react-bootstrap";
import {
  ARR,
  FILM,
  BASE_IMG_URL,
} from "../../../../constants";
import c from "./FavoriteList.module.css";

const FavoriteList = ({
  favoriteList,
  setFavoriteList,
}: {
  favoriteList: ARR | [];
  setFavoriteList: React.Dispatch<
    React.SetStateAction<ARR | []>
  >;
}) => {
  document.body.style.backgroundColor = "#063";
  if (!favoriteList.length) {
    return (
      <div className={c.no_films}>
        <h1>You haven't selected films.</h1>
        <h4>Please ENTER My favoriteList to esc</h4>
      </div>
    );
  }
  const deleteFromList = (id: number) => {
    setFavoriteList([
      ...favoriteList.filter((f) => f.id !== id),
    ]);
  };
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingTop: "50px",
        backgroundColor: "#063",
      }}
    >
      {favoriteList.map((cardData: FILM) => (
        <Card
          style={{ width: "20rem" }}
          bg={`secondary ${c.card_marg}`}
          key={`MyList${cardData.id}`}
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
            <br />
            <Card.Subtitle>
              Release date {cardData.release_date}
            </Card.Subtitle>
            <br />
            <Card.Text id={`cardText_${cardData.id}`}>
              {cardData.overview}
            </Card.Text>
            <Button
              className={c.card_btn_delFilm}
              variant='danger'
              value={cardData.id}
              onClick={(e) => {
                deleteFromList(
                  Number(e.currentTarget.value)
                );
              }}
            >
              Delete from favoriteList
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
};
export default FavoriteList;
