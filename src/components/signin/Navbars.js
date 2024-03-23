import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigationcomp.css';

function Navbars() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <li className="nav-item" type="none">
        <h2 ><i>Connect Plus</i></h2>
      </li>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="">Home</NavLink>
        </li>
        <li className="nav-item ml-auto">
          <NavLink className="nav-link" to="signup">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbars;
