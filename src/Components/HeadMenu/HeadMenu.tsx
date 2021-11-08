import { useState } from "react";
import {
  Button,
  ToggleButton,
  Navbar,
  Nav,
} from "react-bootstrap";
import { DropdownSort } from "./elements";
import { DropdownGenre } from "./elements";
import { getGenresMovies } from "../../api";
import { OPTIONS } from "../../constants";
import "./HeadMenu.css";

const HeadMenu = ({
  setFilmsData,
  setShowFavoriteList,
  showFavoriteList,
  setSort,
  sort,
}: {
  setFilmsData: any;
  setShowFavoriteList: any;
  showFavoriteList: any;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
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
  const takeSort = (a: any) => console.log("takeSort", a);

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
          <DropdownGenre handlerGenre={handlerGenre} />
          <DropdownSort
            options={OPTIONS}
            defaultName={"Сортировать по"}
            value={sort}
            callback={setSort}
          />

          <Button
            variant={"primary"}
            onClick={() =>
              getGenresMovies(genres, setFilmsData)
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

          <ToggleButton
            id='toggle-check'
            type='checkbox'
            variant='outline-success'
            checked={showFavoriteList}
            value='1'
            onChange={(e) =>
              setShowFavoriteList(e.currentTarget.checked)
            }
          >
            My favoriteList
          </ToggleButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeadMenu;
