import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import "./Card.css";
const Card = ({ product }) => {
  const { addToCheckoutList } = useContext(AppContext);

  return (
    <div className="card">
      <img src={product.images[0]} alt={product.title} />
      <h1>{product.title} </h1>
      <p>${product.price} </p>
      <button onClick={() => addToCheckoutList(product)}>+</button>
    </div>
  );
};

export default Card;
