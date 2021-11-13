import { useState, useEffect } from "react";
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
  setIsLoading,
}: {
  filmsData: ARR;
  setFilmsData: React.Dispatch<React.SetStateAction<ARR>>;
  favoriteList: ARR;
  setFavoriteList: React.Dispatch<
    React.SetStateAction<ARR>
  >;
  setShowFavoriteList: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  showFavoriteList: boolean;
  setIsLoading: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) => {
  const [keyWordSort, setKeyWordSort] =
    useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);

  // const sorting = useCallback((
  //   keyWordSort: string,
  // ) => {

  //   if (
  //     keyWordSort &&
  //     filmsList.length &&
  //     filmsList.every(
  //       (obj) =>
  //         typeof obj[keyWordSort] === "string" || "number"
  //     )
  //   ) {
  //     setFilmsList(
  //       [...filmsList].sort((a, b)=> {
  //         if (keyWordSort === "original_title") {
  //           return b[keyWordSort]?.localeCompare() - a[keyWordSort]?.localeCompare();
  //         } else if (
  //           keyWordSort === "release_date" ||
  //           "vote_average" ||
  //           "vote_count"
  //         ) {
  //           return b[keyWordSort] - a[keyWordSort];
  //         } else {
  //           return 0;
  //         }
  //       })
  //     );
  //   } else {
  //     setFilmsList([...filmsList]);
  //   }
  // }, [filmsList, setFilmsList]);

  useEffect(() => {
    sorting(keyWordSort, filmsData, setFilmsData);
    sorting(keyWordSort, favoriteList, setFavoriteList);
  }, [keyWordSort]);

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
              console.log(valGenre, checked);

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
              getMovies(
                genres,
                setFilmsData,
                setIsLoading,
                sorting,
                keyWordSort
              )
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
