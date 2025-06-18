import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
const Navbar = ({cartItem}) => {
  console.log(cartItem.length);
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
            <NavLink to="/cart" className="active-link" >
              Cart{
                
                                 cartItem?.length > 0 ? (<h1>{cartItem.length}</h1>) : ("") 
                            }
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
