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
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { theme, setTheme } = useContext(AppContext);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/login");
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
      <div onClick={handleTheme}>
        {theme ? <BsFillMoonFill /> : <BsSunFill />}
      </div>
      {user && (
        <>
          {" "}
          <NavLink to="/">
            <HiHome />
          </NavLink>
          <nav>
            <div>
              <p>Hoşgeldiniz {user?.displayName}</p>
            </div>
            <NavLink to="/checkout">
              <RiShoppingBag2Fill />
            </NavLink>

            {user !== null && <button onClick={handleSignOut}>Log out</button>}
          </nav>
        </>
      )}
    </div>
  );
};

export default Navbar;
