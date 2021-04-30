import React, { useContext } from "react";
import {UserContext} from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "../imagespro/zh_logo1.jpg";
import NavbarLogin from "./NavbarLogin";
import NavbarLogout from "./NavbarLogout";
import "../index.css";

const NavbarCom = () => {
  const {state,dispatch}= useContext(UserContext);

  if (state) {
    console.log("enter in....")
    return <NavbarLogin />;
  } else {
    console.log("enter in state")
    return <NavbarLogout />;


  }
};
const Navbar = () => {
 
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ width: 100, height: 70 }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <NavbarCom />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
