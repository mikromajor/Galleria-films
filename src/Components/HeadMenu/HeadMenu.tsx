import { useState } from "react";
import {
  Button,
  Navbar,
  NavDropdown,
  Nav,
} from "react-bootstrap";
//import { initVal, valG } from "../../constants";
import { Checkbox } from "./elements";
import { getGenresMovies } from "../../api";
import "./HeadMenu.css";

const HeadMenu = ({
  setCardsData,
}: {
  setCardsData: (result: any) => any;
}) => {
  const [genres, setGenres] = useState<string[]>([]);
  const handlerGenre = (
    valGenre: string,
    checked: boolean
  ) => {
    if (checked) {
      if (!genres.some((item) => item === valGenre)) {
        const updatedValues = [...genres, valGenre];
        setGenres(updatedValues);
      }
    } else {
      const updatedValues = genres.filter(
        (el) => el !== valGenre
      );
      setGenres(updatedValues);
    }
  };

  return (
    <Navbar
      variant='dark'
      bg='dark'
      expand='lg'
      fixed='top'
    >
      <Navbar.Brand href='#home'>FilmsTime</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar-dark-example' />
      <Navbar.Collapse id='navbar-dark-example'>
        <Nav>
          <NavDropdown
            id='nav-dropdown-dark-example'
            title='Choose genre'
            menuVariant='dark'
          >
            <div className='center green'>
              <Checkbox
                label='Action'
                genreId='28'
                handlerGenre={handlerGenre}
              />
              <Checkbox
                label='Carton'
                genreId='16'
                handlerGenre={handlerGenre}
              />
              <Checkbox
                label='Comedy'
                genreId='35'
                handlerGenre={handlerGenre}
              />
              <Checkbox
                label='Fantasy'
                genreId='14'
                handlerGenre={handlerGenre}
              />
              <Checkbox
                label='Fantastic'
                genreId='878'
                handlerGenre={handlerGenre}
              />
            </div>
          </NavDropdown>
          <Button
            variant={"primary"}
            onClick={() =>
              getGenresMovies(genres, setCardsData)
            }
          >
            {"Click to load"}
          </Button>

          <Button
            variant={"secondary"}
            onClick={() =>
              document.body.classList.toggle("bgBody")
            }
          >
            {"Switch background color"}
          </Button>
          <Button variant={"success"}>{"My list"}</Button>
          <Button variant={"warning"}>{"Come back"}</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeadMenu;
