import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className="topnav">
        <div className="logo">
              <Link to="/" style={{ textDecoration: 'none' }}>
            <h2>MedAppoin</h2>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGNUP</Link>
        </div>
      </div>
   
  );
};

export default Navbar;
