import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { mycontext } from "../context/Mycontext";
const Navbar = () => {
  const { CartItem } = useContext(mycontext);
  return (
    <nav className="navbar">
      <ul className="nav-list-container">
        <div className="nav-list">
          <li>
            <NavLink to="/" className="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="active-link">
              Contact
            </NavLink>
          </li>
        </div>
        <div className="Navbar-Cart">
          <li>
            <NavLink to="/cart" className="active-link">
              Cart{CartItem?.length > 0 ? <h1>{CartItem?.length}</h1> : ""}
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
