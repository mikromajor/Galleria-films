import { NavDropdown } from "react-bootstrap";
import CheckGenre from "../CheckGenre/CheckGenre";

const DropdownGenre = ({
  getGenre,
}: {
  getGenre: (v: string, c: boolean) => void;
}) => {
  return (
    <NavDropdown
      id='nav-dropdown-dark-example'
      title='Choose genre'
      menuVariant='dark'
    >
      <div className='center green'>
        <CheckGenre
          label='Action'
          genreId='28'
          getGenre={getGenre}
        />
        <CheckGenre
          label='Carton'
          genreId='16'
          getGenre={getGenre}
        />
        <CheckGenre
          label='Comedy'
          genreId='35'
          getGenre={getGenre}
        />
        <CheckGenre
          label='Fantasy'
          genreId='14'
          getGenre={getGenre}
        />
        <CheckGenre
          label='Fantastic'
          genreId='878'
          getGenre={getGenre}
        />
      </div>
    </NavDropdown>
  );
};
export default DropdownGenre;
