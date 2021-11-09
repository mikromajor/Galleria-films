import { useState } from "react";
import {
  Button,
  ToggleButton,
  Navbar,
  Nav,
} from "react-bootstrap";
import {
  DropdownGenre,
  DropdownSort,
  Counter,
} from "../UI/elements";
import { getGenresMovies } from "../../api";
import { OPTIONS, ARR } from "../../constants";
import { sorting, handlerGenre } from "./handlers";
import "./HeadMenu.css";

const HeadMenu = ({
  filmsData,
  setFilmsData,
  setShowFavoriteList,
  showFavoriteList,
  favoriteList,
  setFavoriteList,
}: {
  filmsData: string | ARR;
  setFilmsData: React.Dispatch<
    React.SetStateAction<string | ARR>
  >;
  favoriteList: string | ARR;
  setFavoriteList: React.Dispatch<
    React.SetStateAction<ARR | []>
  >;
  setShowFavoriteList: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  showFavoriteList: boolean;
}) => {
  const [sort, setSort] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);

  const callSorting = (val: string): void => {
    setSort(val);
    sorting(
      val,
      filmsData,
      setFilmsData,
      favoriteList,
      setFavoriteList
    );
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
          <DropdownGenre
            handlerGenre={(
              valGenre: string,
              checked: boolean
            ) =>
              handlerGenre(
                genres,
                setGenres,
                valGenre,
                checked
              )
            }
          />
          <Button
            variant={"primary"}
            onClick={() =>
              getGenresMovies(genres, setFilmsData)
            }
          >
            Click to load
          </Button>
          <DropdownSort
            options={OPTIONS}
            defaultName={"Сортировать по..."}
            value={sort}
            callback={callSorting}
          />
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
          <Counter favoriteList={favoriteList} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeadMenu;
