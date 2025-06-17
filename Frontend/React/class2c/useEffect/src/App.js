import { useEffect,useState } from "react";

function App(){
  const [state,setState]=useState("fkjal");
  function print(){
    console.log(state);
    setState("jjjjjj");
  }
  useEffect(()=>{
    print()
  })
  return(
    <div className="App">
    </div>
  )
}
export default App;