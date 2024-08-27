import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom'; 
import logo from './logo.jpg'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div >
        <h7>NeighbourNet</h7> <img className="navbar-logo" src={logo} />     
        </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/forum">Discussion Forum</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
