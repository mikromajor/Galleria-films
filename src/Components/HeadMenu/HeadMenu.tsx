import {useState} from 'react';
import { Button, Navbar, NavDropdown, Nav } from "react-bootstrap";
import {initVal} from '../../constants'; 
import {Checkbox} from './elements';
import {getGenresMovies} from '../../api'
import './HeadMenu.css'

function HeadMenu() {
 const [objGenres, setObjGenres]=useState(initVal);

  const handlerGenre=(valGenres:'28'|'16'|'35'|'14'|'878', checked:boolean)=>{
    objGenres[valGenres]=checked;
    setObjGenres(objGenres)
  };  
  

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
                <Checkbox label={'Actions'} nmb={28} handlerGenre={handlerGenre}/>
                <Checkbox label={'Cartons'} nmb={16} handlerGenre={handlerGenre}/>
                <Checkbox label={'Comedies'} nmb={35} handlerGenre={handlerGenre}/>
                <Checkbox label={'Fantasies'} nmb={14} handlerGenre={handlerGenre}/>
                <Checkbox label={'Fantastics'} nmb={878} handlerGenre={handlerGenre}/>
              </div>
            </NavDropdown>
              <Button
                variant={"primary"}
                onClick={()=>getGenresMovies(objGenres) }
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
