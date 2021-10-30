import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { arr } from "../../constants";

const CardsFilms = ({ cardsData }: { cardsData: arr }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/500px500" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title
          and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default CardsFilms;
