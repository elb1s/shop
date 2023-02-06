import React, { useContext } from "react";

import { AppContext } from "../../contexts/AppContext";
import { NavLink } from "react-router-dom";

//ICONS
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";

import "./Navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
const Navbar = () => {
  const { theme, setTheme } = useContext(AppContext);
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  const handleTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", !theme);
  };
  return (
    <div className="navbar">
      {user && (
        <>
          <nav>
            <p>Hoşgeldiniz, {user?.displayName}</p>
            <div className="rightSide">
              <NavLink to="/home">
                <HiHome className="iconHome" />
              </NavLink>
              <NavLink to="/checkout">
                <RiShoppingBag2Fill />
              </NavLink>

              {user && <button onClick={handleSignOut}>Log out</button>}
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default Navbar;
