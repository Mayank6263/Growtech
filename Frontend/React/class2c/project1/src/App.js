import Child1 from "./components/Child1";
import {useState} from "react";
function App() {
  const [money, setmoney]= useState("11")
  return (
    <div className="container">
      <Child1 mymoney={money} chngmoney={setmoney}/>
    </div>
  );
}
export default App;
