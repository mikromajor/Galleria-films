import { NavDropdown } from "react-bootstrap";
import CheckGenre from "../CheckGenre/CheckGenre";

const DropdownGenre = ({
  handlerGenre,
}: {
  handlerGenre: (v: string, c: boolean) => void;
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
          handlerGenre={handlerGenre}
        />
        <CheckGenre
          label='Carton'
          genreId='16'
          handlerGenre={handlerGenre}
        />
        <CheckGenre
          label='Comedy'
          genreId='35'
          handlerGenre={handlerGenre}
        />
        <CheckGenre
          label='Fantasy'
          genreId='14'
          handlerGenre={handlerGenre}
        />
        <CheckGenre
          label='Fantastic'
          genreId='878'
          handlerGenre={handlerGenre}
        />
      </div>
    </NavDropdown>
  );
};
export default DropdownGenre;
