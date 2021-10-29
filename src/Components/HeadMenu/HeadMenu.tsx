import { Button, Form, Navbar, NavDropdown, Nav } from "react-bootstrap";
import {Checkbox} from './elements';
import {objG, strGenres} from '../../constants'
import './HeadMenu.css'


let genre:objG={
  actions:false,
  cartons:false,
  comedies:false,
  fantasies:false,
  fantastics:false
}
;

function HeadMenu({setObjGenres}:{setObjGenres:(a:objG)=>void}) {
 
  const handlerGenre=(valGenres: strGenres, checked:boolean)=>{
    genre[valGenres]= checked;
    
  }

  const handleClick=()=>{setObjGenres(genre)}

  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand href="#home">FilmsTime</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Choose genre"
              menuVariant="dark"
            >
              <div className='center green'>
                <Checkbox label={'Actions'} handlerGenre={handlerGenre}/>
                <Checkbox label={'Cartons'} handlerGenre={handlerGenre}/>
                <Checkbox label={'Comedies'} handlerGenre={handlerGenre}/>
                <Checkbox label={'Fantasies'} handlerGenre={handlerGenre}/>
                <Checkbox label={'Fantastics'} handlerGenre={handlerGenre}/>
              </div>
            </NavDropdown>
              <Button
                variant={"primary"}
                onClick={handleClick}
              >
                {"Click to load"}
              </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HeadMenu;
