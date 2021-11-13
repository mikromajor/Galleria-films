import React, { useState } from "react";
import { Card, Button, CloseButton } from "react-bootstrap";
import { BASE_IMG_URL } from "../../../../constants";
import { FilmProps } from "./Film.types";

import styles from "./Film.module.css";

const Film = ({
  film,
  isInFavorites,
  addToFavoriteList,
  deleteFromFavoriteList,
}: FilmProps) => {
  const {
    id,
    title,
    poster_path,
    overview,
    vote_count,
    vote_average,
    release_date,
  } = film;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      style={{ width: "20rem" }}
      bg={`${isInFavorites ? "success" : "primary"}`}
      className={`${styles.filmCard} ${
        isExpanded && styles.filmCard__expanded
      }`}
    >
      <Card.Img
        variant='top'
        src={`${BASE_IMG_URL}${poster_path}`}
      />
      <Card.Body className={styles.cardBody}>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='mb-2'>
          Vote average {vote_average}
          <br />
          Counts {vote_count}
          <br />
          Release date {release_date}
          <br />
        </Card.Subtitle>

        {isExpanded && <Card.Text>{overview}</Card.Text>}

        <div className={styles.cardButtonsRow}>
          <Button
            variant='dark'
            onClick={() => {
              setIsExpanded((prevState) => !prevState);
            }}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </Button>

          <Button
            variant='success'
            onClick={() => {
              addToFavoriteList(id);
            }}
          >
            Add to favorite
          </Button>
          {isInFavorites && (
            <CloseButton
              className={styles.card_btn_remove}
              style={{ border: "3px solid red" }}
              variant='white'
              onClick={() => deleteFromFavoriteList(id)}
            />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Film;
