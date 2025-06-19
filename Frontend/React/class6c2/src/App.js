
import { useState } from 'react';
import './App.css';
// import {useContext} from 'react'
import Child3 from "./components/Child3";
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import {createContext} from 'react';
export const myContext = createContext();

function printtable(){
  for(let i=1; i<5; i++){
    console.log(2*i);
  }
}
const fname = "Mayank";
const user ={
  age:22,
  fname,
  printtable

}
function App() {

  // const [name,setname]=useState("hey who are you?");
  // function getData(name){
  //   console.log("this is getdata function")
  //   console.log(name);
  // }
  // const {fname,printtable} = useContext(myContext)
  // console.log(fname)
  // printtable();
  return (
    <div className="App">
      <myContext.Provider value={user}>
        <Child3></Child3>
        <Child3></Child3>
        <Child3></Child3>
      </myContext.Provider>
      

      app me hai
    </div>
  );
}

export default App;
