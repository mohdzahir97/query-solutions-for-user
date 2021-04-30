import React from "react";
import { NavLink } from "react-router-dom";
const NavbarLogout = () => {
  return (
    <>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">
          Register
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
 
    </>
  );
};

export default NavbarLogout;
