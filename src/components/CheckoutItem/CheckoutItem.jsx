import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import "./checkoutitem.css";
const CheckoutItem = ({ item, idx }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(AppContext);
  return (
    <div key={idx}>
      <div className="container">
        <div>
          <img src={item.image} alt={item.title} />
        </div>
        <div className="texts">
          <h1>{item.title} </h1>
          <p id="description">{item.description} </p>
          <p id="itemPrice">${item.quantity * item.price} </p>
          <button className="quantity" onClick={() => increaseQuantity(item)}>
            +
          </button>
          <span>{item.quantity}</span>
          <button className="quantity" onClick={() => decreaseQuantity(item)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
