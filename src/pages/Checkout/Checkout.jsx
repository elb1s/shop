import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { AuthContext } from "../../contexts/AuthContext";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import "./Checkout.css";
const Checkout = () => {
  const { checkoutList, giveOrder } = useContext(AppContext);
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
      {checkoutList.length === 0 ? (
        <div className="noItem">THERE IS NO ITEM IN YOUR BAG!</div>
      ) : (
        checkoutList.map((item, idx) => {
          return <CheckoutItem item={item} idx={idx} />;
        })
      )}
    </div>
  );
};

export default Checkout;
