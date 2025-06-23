import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact activeClassName="active">Admin</NavLink>
      <NavLink to="/userpage" activeClassName="active">User</NavLink>
    </div>
  )
}

export default Navbar
