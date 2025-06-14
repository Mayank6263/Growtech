import { useEffect } from "react";

function App(){
  const [state,setState]=useEffect("fkjal");
  function print(){
    console.log("fjfljfj");
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