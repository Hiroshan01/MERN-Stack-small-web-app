import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li className="nav-item">
          <Link to="/mainhome" className="active home-a">
            <h1>Home</h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/adduser" className="active home-a">
            <h1>Add User</h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/userdetails" className="active home-a">
            <h1>User Details</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
