import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [checkoutList, setCheckoutList] = useState(
    JSON.parse(localStorage.getItem("checkoutList")) || []
  );

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    localStorage.setItem("checkoutList", JSON.stringify(checkoutList));
  }, [checkoutList]);

  const addToCheckoutList = (item) => {
    setCheckoutList([...checkoutList, item]);
  };

  const values = {
    checkoutList,
    addToCheckoutList,
    theme,
    setTheme,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
