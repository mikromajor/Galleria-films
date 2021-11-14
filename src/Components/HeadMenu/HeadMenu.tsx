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
} from "../UI";
import { getMovies } from "../../api";
import { OPTIONS } from "../../constants";
import { handlerGenre } from "./handlers";
import { HeadMenuProps } from "./HeadMenu.types";
import "./HeadMenu.css";

const HeadMenu = ({
  setFilmsData,
  keyWordSort,
  setKeyWordSort,
  setShowFavoriteList,
  showFavoriteList,
  favoriteList,
  setIsLoading,
}: HeadMenuProps) => {
  const [genres, setGenres] = useState<string[]>([]);

  return (
    <Navbar
      variant='dark'
      bg='dark'
      expand='lg'
      fixed='top'
    >
      <Navbar.Brand>FilmsTime</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar-dark-example' />
      <Navbar.Collapse id='navbar-dark-example'>
        <Nav>
          <Nav.Item>
            <Nav.Link href='#home'>Home</Nav.Link>
          </Nav.Item>
          <DropdownGenre
            getGenre={(
              valGenre: string,
              checked: boolean
            ) => {
              handlerGenre(
                genres,
                setGenres,
                valGenre,
                checked
              );
            }}
          />
          <Button
            variant={"primary"}
            onClick={() =>
              getMovies(genres, setFilmsData, setIsLoading)
            }
          >
            Click to load
          </Button>
          <DropdownSort
            options={OPTIONS}
            defaultName={"Sort"}
            value={keyWordSort}
            setKeyWordSort={setKeyWordSort}
          />
          <ToggleButton
            id='toggle-check'
            type='checkbox'
            variant='outline-success'
            checked={showFavoriteList}
            value=''
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
