import React from "react";
import Logo from './Images/logo labb2.png'
import { Link, NavLink } from "react-router-dom";
import './CSS/style.css'


function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={Logo} alt="Simon N Logo" />
      </Link>
      <nav className="navbar">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/CV" activeClassName="active">CV</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
