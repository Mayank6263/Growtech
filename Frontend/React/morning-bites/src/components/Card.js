import React, { useState } from "react";
import "./card.css";


const Card = ({data}) => {
  const [track, settrack] = useState(true);
  console.log(data)
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
              {data?.description?.substr(0, 100)}... </p>
              <div>
                <button
                  onClick={() => {
                    settrack(!track);
                  }}
                >
                  ReadMore
                </button>
              </div>
           
          </div>
        ) : (
          <div>
            <p>
              {data.description} </p>
              <div>
                <button
                  onClick={() => {
                    settrack(!track);
                  }}
                >
                  Less
                </button>
              </div>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
