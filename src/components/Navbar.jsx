// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faUserPlus, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'; // Import required icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> 
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FontAwesomeIcon icon={faSignInAlt} /> 
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FontAwesomeIcon icon={faUserPlus} />
          </Link>
        </li>
        <li>
          <Link to="/userdashboard">
            <FontAwesomeIcon icon={faTachometerAlt} /> 
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
