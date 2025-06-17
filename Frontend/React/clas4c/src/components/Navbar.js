import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./nav.css";

const Navbar = () => {
  return (
    <div>
    {/* <nav>
        <ul>
            <li><Link className='active'>Home</Link></li>
            <li><Link className='active'>About</Link></li>
            <li><Link className='active'>Contact</Link></li>
        </ul>
    </nav> */}
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                <NavLink to="/" exact="true" activeClassName="active-link">Home</NavLink>
                </li>
                <li>
                <NavLink to="/about"  activeClassName="active-link">About</NavLink>
                </li>
                <li>
                <NavLink to="/contact"  activeClassName="active-link">Contact</NavLink>
                </li>
                
            </ul>
        </nav>

    </div>
  )
}

export default Navbar
