import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { arr, film, BASE_IMG_URL } from "../../constants";

const CardsFilms = ({ cardsData }: { cardsData: arr }) => {
  console.log(
    "cardsData in  CardsFilms ->",
    typeof cardsData,
    cardsData
  );

  const test = "wdwedfg";

  return (
    <div>
      <i className="fas fa-spin fa-spinner"></i>
      <i className="fas fa-cog"></i>
      <i className="fas fa-spin fa-cog"></i>
      {cardsData.map((cardData: film) => (
        <Card id={cardData.id} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`${BASE_IMG_URL}${cardData.poster_path}`}
          />
          <Card.Body>
            <Card.Title>drhjbsdrf - {test}</Card.Title>
            <Card.Text>
              {` popularity: ${cardData.popularity}`}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default CardsFilms;
