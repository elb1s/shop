import React, { useContext } from "react";

import { AppContext } from "../../contexts/AppContext";
import { NavLink } from "react-router-dom";

//ICONS
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";

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
      <NavLink to="/">
        <HiHome />
      </NavLink>
      <nav>
        <div>
          <p>Hoşgeldin Süleyman</p>
          {/* <img /> */}
        </div>
        <NavLink to="/checkout">
          <RiShoppingBag2Fill />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
