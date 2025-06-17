import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css"
const Navbar = () => {
  return (
    <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <NavLink to="/" className="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="active-link">Contact</NavLink>
                </li>
            </ul>
        </nav>
  )
}

export default Navbar
