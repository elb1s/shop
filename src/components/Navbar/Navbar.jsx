import React, { useContext } from "react";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { AppContext } from "../../contexts/AppContext";

import "./Navbar.css";
const Navbar = () => {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <div className="navbar">
      <div
        onClick={() => {
          setTheme(!theme);
        }}
      >
        {theme ? <BsFillMoonFill /> : <BsSunFill />}
      </div>
      <nav>
        <div>
          <p>Hoşgeldin Süleyman</p>
          {/* <img /> */}
        </div>
        <RiShoppingBag2Fill />
      </nav>
    </div>
  );
};

export default Navbar;
