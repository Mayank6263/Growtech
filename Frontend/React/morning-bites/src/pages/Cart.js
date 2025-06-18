import React from "react";
import "../components/card.css";
import Card from "../components/Card";
const Cart = ({ cartItem }) => {
  return (
    <div className="App">
    
      {
        cartItem?.length === 0 ? (
          <div className="empty-cart">
            <h1>There is NOthing in CART</h1>
          </div>
        ):(
        <div className="card-container">{        cartItem?.map((item, index) => (
        <div key={index}>
          <Card data={item} />
        </div>
        ))}
      </div>)}
      
    </div>
  );
};

export default Cart;
