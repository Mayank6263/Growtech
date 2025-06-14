import { useState } from "react";
import { Card } from "./components/Card";
function App() {
  const user = {
    pcname:"dell",
    cpu:"8core",
    keyboard:"logitech",
    speaker:"JBL"
  }
  // const [age , setage] = useState("55");
  // const [qualification , setqualification] = useState("Btech");

  const [data , setdata] = useState(user);

  // let a = "Mayank"
  // function Change(key1,val1){
  //   // a = "Solanki"
  //   // console.log("function called")
  //   setdata((old)=>{
  //     return {...old,[key1]:val1}
  //   });
  // }

  function Change(key1,val1){
    setdata((old)=>{
      return {...old,[key1]:val1}
    });
  }
  return (
    <div className="App">
      <Card/>
      {/* <h1>My name is {name} Sir</h1> */}
      {/* <button onClick={()=>{Change()}}>Change Name</button> */}

      {/* <button onClick={()=>{setname("Jagmohan");}}>Change Name</button>

      <h2>Age is {age}</h2>
      <button onClick={()=>{setage("24");}}>Change Age</button> */}

      {/* <h2>Qualification is {qualification}</h2>
      <button onClick={()=>{setqualification("Mtech");}}>Change Qualification</button> */}

        <h2>My pc's name is {data.pcname}</h2>
        <button onClick={()=>{
          Change("pcname","HP")
          console.log(data.pcname)
        }}>click me </button>

        <h2>My pc's core is {data.cpu}</h2>
        <button onClick={()=>{
          Change("cpu" ,"9core")
        }}>click me </button>

        <h2>My pc's KEYBOARD is {data.keyboard}</h2>
        <button onClick={()=>{
          Change("keyboard","hp")
          console.log(data.pcname)
        }}>click me </button>

        <h2>My pc's KEYBOARD is {data.speaker}</h2>
        <button onClick={()=>{
          Change("speaker","U-BON")
          console.log(data.speaker)
        }}>click me </button>

    </div>
  );
}

export default App;
