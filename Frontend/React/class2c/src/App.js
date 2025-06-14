import Card from "./components/card.js"
import {useState} from "react";
import "./components/card.css"
function App() {
  const [img,setimg]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwj1J7Ix4nfDE6FW_shyWfXa8wM0XdZCqIg&s");
  const [name,setname]=useState("Christiano Ronaldo")
  const [about, setabout]= useState(`
    Record Goal Scorer – He is the all-time leading goal scorer in both the UEFA Champions League and for Portugal's national team.
5-Time Ballon d'Or Winner – Ronaldo has won the prestigious Ballon d'Or award five times, highlighting his dominance in world football.

Incredible Athleticism – Known for his speed, strength, and jumping ability, he can reportedly jump higher than an average NBA player.

Clubs Across Europe – He has played for top clubs like Manchester United, Real Madrid, Juventus, and Al-Nassr, winning major trophies with each.
Global Icon – Beyond football, he is one of the most followed people on social media and a major global brand ambassador.
`)
  return (
    

    //It occupiying too many lines of code so we will use map to iterate

    // <div className="App">
    //   <Card myimg={img} changeimg={setimg} myname={name} changename={setname} myabout={about} changeabout={setabout}/>
    //   <Card myimg={img} changeimg={setimg} myname={name} changename={setname} myabout={about} changeabout={setabout}/>
    //   <Card myimg={img} changeimg={setimg} myname={name} changename={setname} myabout={about} changeabout={setabout}/>
    //   <Card myimg={img} changeimg={setimg} myname={name} changename={setname} myabout={about} changeabout={setabout}/>
    //   <Card myimg={img} changeimg={setimg} myname={name} changename={setname} myabout={about} changeabout={setabout}/>
    //   <Card myimg={img} changeimg={setimg} myname={name} changename={setname} myabout={about} changeabout={setabout}/>
    //   <Card myimg={img} changeimg={setimg} myname={name} changename={setname} myabout={about} changeabout={setabout}/>

    // </div>
    // <div className="App">{
      
    //   [1,2,3,4,5,6,7,7,9].map((item,index)=>{
    //    return <div key={index}>
    //       <Card myimg={img} changeimg={setimg} myname={name} changename={setname} myabout={about} changeabout={setabout}/>
    //     </div>
    //   }
    //   )
    // }
    // </div>

    <div className="App">
      {
      
      [1,2,3,4,5,6,7,7,9].map((item,index)=><div key={index}><Card myimg={img} changeimg={setimg} myname={name} changename={setname} myabout={about} changeabout={setabout}/></div>
      )
    }
    </div>
  );
}

export default App;
