import { Card, Row, Button } from "react-bootstrap";
import { arr, film, BASE_IMG_URL } from "../../constants";
import c from "./MyList.module.css";

const MyList = ({
  list,
  setList,
}: {
  list: arr | [];
  setList: React.Dispatch<React.SetStateAction<arr | []>>;
}) => {
  if (!list.length) {
    return (
      <div className={c.no_films}>
        <h1>You haven't selected films.</h1>
        <h4>Please ENTER My list to esc</h4>
      </div>
    );
  }
  const deleteFromList = (id: number) => {
    setList([...list.filter((f) => f.id !== id)]);
  };
  return (
    <Row style={{ justifyContent: "center" }}>
      {list.map((cardData: film) => (
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
              Delete from list
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
};
export default MyList;
