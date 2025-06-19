import { useState } from 'react'
import Child1 from "./components/Child1"
import './App.css'

function App() {
  const [name, setname] = useState("mayank")
  function getData(data){
    console.log("this is get data",data)
    setname(data)
  }
  return (
    <>
    <p>{name}</p>
     <Child1  name={getData} ></Child1>
    </>
  )
}

export default App
