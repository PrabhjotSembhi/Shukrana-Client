import React from "react";
import { Link, Outlet } from "react-router-dom";
import LoginButton from "../LoginBtn/LoginButton";

import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <header>
        <div className="wrapper">
          <img src='./Logo.png' className="logo" alt="Logo" />
          <nav>
            <Link className="NavItem" to="/">Home</Link>
            <Link className="NavItem" to="/notes">Notes</Link>
            <Link className="NavItem" to="/">About</Link>
            <Link className="NavItem" to="/">Why</Link>


          </nav>
          <LoginButton />
        </div>
      </header>
      <Outlet />

    </>
  );
};

export default Navigation;
