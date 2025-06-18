import React, { useState } from "react";
import "./card.css";


const Card = ({data,cartItem, SetCartItem}) => {
  const [track, settrack] = useState(true);
  let [count, setcount]= useState(data?.quantity);
  const already = cartItem?.find((item)=>{
    return item?.id === data?.id;
  });
  function increament(){
    setcount(data.quantity++)
  }
 
  function decreament(){
    setcount(()=>{
      if(data.quantity === 1){
        removeFromCart(data.id);
        return ;
      }
      return data.quantity--;
      }
    )
  }
  function removeFromCart(id){
    const filterval = cartItem?.filter((it)=>{
      return it.id !== id;
    }
    )
    SetCartItem(filterval)
    }
  
  
  function AddToCart(data){
    console.log("onclicking",data)
      const clickit = cartItem?.some((item)=>{
        return item?.id === data?.id
      })
      SetCartItem((old)=>{
        if(clickit){
          alert("already clicked")
          return old
        }
        
        return [...old,data];
      })
  }
  return (
    <div className="product-card">
      <img
        src={data?.image}
        alt={data?.productName}
        className="product-image"
      />
      <h3>{data?.productName}</h3>
      <p>
        <strong>Price: </strong>
        <span className="product-price">₹{data?.productPrice}</span>{" "}
        <del className="product-actual-price">₹{data?.actualPrice}</del>
      </p>
      <p>
        <strong>Rating:</strong> {data?.rating} ⭐
      </p>
      <p>
        <strong>Made By:</strong> {data?.madeBy}
      </p>
      <p>
        <strong>Quantity:</strong> {data?.quantity}
      </p>

      <div className="desc-section">
        {track ? (
          <div>
            <p>
              {data?.description?.substr(0, 100)} </p>
              
                <p
                  onClick={() => {
                    settrack(!track);
                  }}
                >
                  ReadMore...
                </p>
           
          </div>
        ) : (
          <div>
            <p>
              {data.description} </p>
              
                <p
                  onClick={() => {
                    settrack(!track);
                  }}
                >
                  Less
                </p>
              
           
          </div>
        )}
      </div>

      {
          already !== undefined?( <div className="button-container">
            <p onClick={()=>{
              increament()
            }}>+</p>
            <p>{already?.quantity}</p>
             <p onClick={()=>{
              decreament()
            }}>-</p>
          </div>
          )
       :
(
        <div className="cart">
          <button className="addtocart" onClick={()=>{AddToCart(data)}}>Add to Cart</button>
        </div>)
}
    </div>
  );
};

export default Card;
