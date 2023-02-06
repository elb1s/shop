import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ product }) => {
  const { addToCheckoutList } = useContext(AppContext);

  return (
    <div className="card">
      <Link className="link" to={`/productdetail/${product.id}`}>
        <div className="divImg">
          <img src={product.images[0]} alt={product.title} />
        </div>
        <h1>{product.title} </h1>
        <p>${product.price} </p>
      </Link>
      <button onClick={() => addToCheckoutList(product)}>+</button>
    </div>
  );
};

export default Card;
