import React from 'react'
import Variable from '../utiles/Variable'
import Card from '../components/Card'
import "../components/card.css"
const Home = ({data}) => {
  return (
    <div className="App">
    <h1 style={{textAlign:"center",color:"aliceblue" }}>Morning Bites</h1>
      <div className="inner">
      
      {
        data.map((item,index)=>(
          <div key={index}>
           <Card data = {item}/>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Home
