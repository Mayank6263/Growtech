import React, { useContext } from "react";
import "../components/card.css";
import Card from "../components/Card";
import { mycontext } from "../context/Mycontext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const {CartItem,SetCartItem}=useContext(mycontext)
  const navigate = useNavigate();
  function GOtoHome(){
    navigate('/');
  }

  return (
    <div className="App">
    
      {
        CartItem?.length === 0 ? (
          <div className="empty-cart">
            <h1>There is NOthing in CART</h1>
            <button onClick={()=>{GOtoHome()}}>Go to Home</button>
          </div>
        ):(
        <div className="card-container">{ CartItem?.map((item, index) => (
        <div key={index}>
          <Card data={item} SetCartItem={SetCartItem} CartItem={CartItem}/>
        </div>
        ))}
      </div>)}
      
    </div>
  );
};

export default Cart;
