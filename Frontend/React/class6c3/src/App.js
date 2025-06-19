
import { useState } from 'react';
import './App.css';
import {useContext} from 'react'
import Child3 from "./components/Child3";
import { myContext } from './index';
function App() {
  // const [name,setname]=useState("hey who are you?");
  // function getData(name){
  //   console.log("this is getdata function")
  //   console.log(name);
  // }
  const {fname,printtable} = useContext(myContext)
  console.log(fname)
  printtable();
  return (
    <div className="App">
    
      app me hai{fname}
    </div>
  );
}

export default App;
