import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { AuthContext } from "../../contexts/AuthContext";
import "./Checkout.css";
const Checkout = () => {
  const { checkoutList, increaseQuantity, decreaseQuantity, giveOrder } =
    useContext(AppContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  });

  return (
    <div className="checkout">
      <button id="order" onClick={giveOrder}>
        Give order
      </button>
      <h1 id="total">TOTAL: 0</h1>
      {checkoutList.length === 0 ? (
        <div className="noItem">THERE IS NO ITEM IN YOUR BAG!</div>
      ) : (
        checkoutList.map((item, idx) => {
          return (
            <div key={idx}>
              <div className="container">
                <div>
                  <img src={item.images[0]} alt={item.title} />
                </div>
                <div className="texts">
                  <h1>{item.title} </h1>
                  <p id="description">{item.description} </p>
                  <p id="itemPrice">${item.quantity * item.price} </p>
                  <button
                    className="quantity"
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity"
                    onClick={() => decreaseQuantity(item)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Checkout;
