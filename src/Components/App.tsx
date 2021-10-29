import {useState} from "react";
import { HeadMenu } from "./HeadMenu";
import {initVal} from '../constants'

function App() {
  const[objGenres,setObjGenres]=useState(initVal)
  console.log('objGenres in App', objGenres);
  
  return (
    <>
      <HeadMenu setObjGenres={setObjGenres}/>
    </>
  );
}

export default App;
