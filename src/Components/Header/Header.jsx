import React from 'react';
import Home from './../Home/Home';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <h2>My Website</h2> 
      <Link to="/">Home</Link>
      <Link to="/users">Users Us</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Header;