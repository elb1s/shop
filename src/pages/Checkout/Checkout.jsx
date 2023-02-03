import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const Checkout = () => {
  const { checkoutList } = useContext(AppContext);
  const uniqueCheckoutList = [];

  checkoutList.forEach((item) => {
    let productIndex = uniqueCheckoutList.findIndex((p) => p.id === item.id);
    if (productIndex === -1) {
      uniqueCheckoutList.push({ ...item, quantity: 1 });
    } else {
      uniqueCheckoutList[productIndex].quantity += 1;
    }
  });

  console.log(uniqueCheckoutList);
  return (
    <div>
      {uniqueCheckoutList &&
        uniqueCheckoutList.map((item) => (
          <div>
            {item.title} {item.quantity}
            <img src={item.images[0]} alt={item.title} />
          </div>
        ))}
    </div>
  );
};

export default Checkout;
