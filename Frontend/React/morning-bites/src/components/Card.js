import "./card.css";
import { useContext } from "react";
import { mycontext } from "../context/Mycontext";

const Card = ({ data }) => {
  const { AddToCart, decreament, increament, track, settrack, CartItem } =
    useContext(mycontext);
  const already = CartItem?.find((item) => {
    return item?.id === data?.id;
  });
  console.log("already :- ", already);
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
            <p>{data?.description?.substr(0, 100)} </p>

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
            <p>{data.description} </p>

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

      {already !== undefined ? (
        <div className="button-container">
          <p
            className="p1"
            onClick={() => {
              increament(data);
            }}
          >
            +
          </p>
          <p>{already?.quantity}</p>
          <p
            className="p2"
            onClick={() => {
              decreament(data);
            }}
          >
            -
          </p>
        </div>
      ) : (
        <div className="cart">
          <button
            className="addtocart"
            onClick={() => {
              AddToCart(data);
            }}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
