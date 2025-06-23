import React, { useContext } from "react";
import Card from "../components/Card";
import "../components/card.css";
import { mycontext } from "../context/Mycontext";
const Home = () => {
  const { Variable } = useContext(mycontext);
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "aliceblue" }}>Morning Bites</h1>
      <div className="inner">
        {Variable?.map((item, index) => (
          <div key={index}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
