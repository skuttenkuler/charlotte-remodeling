import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
const Navbar = () => {
  return (
    <nav>
      <img src="https://charlotte-remodeling-assets.s3.us-east-2.amazonaws.com/assets/logo.png" alt="logo"/>
      <ul>
        <li class="">
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/contact" >Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
