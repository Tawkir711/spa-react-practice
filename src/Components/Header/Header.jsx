import React from 'react';
import Home from './../Home/Home';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <h2>My Website</h2> 
      <NavLink to="/">Home</NavLink>
      <NavLink to={'/posts'}>Posts</NavLink>
      <NavLink to="/users">Users Us</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Header;