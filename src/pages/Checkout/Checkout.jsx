import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import "./Checkout.css";
const Checkout = () => {
  const { checkoutList, setCheckoutList } = useContext(AppContext);

  return (
    <div className="checkout">
      {checkoutList.length === 0 ? (
        <div>THERE IS NO ITEM IN YOUR BAG!</div>
      ) : (
        checkoutList.map((item) => {
          return (
            <div className="container" key={item.id}>
              <div>
                <img src={item.images[0]} alt={item.title} />
              </div>
              <div className="texts">
                <h1>{item.title} </h1>
                <p>{item.description} </p>
                <button>+</button>
                <span>{item.quantity}</span>
                <button>-</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Checkout;
