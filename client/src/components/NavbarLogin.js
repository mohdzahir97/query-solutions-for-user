import React from "react";
import { NavLink } from "react-router-dom";
const NavbarLogin = () => {
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
        <NavLink className="nav-link" to="/logout">
          Logout
        </NavLink>
      </li>
    </>
  );
};

export default NavbarLogin;
