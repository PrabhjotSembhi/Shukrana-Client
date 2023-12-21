import React from "react";
import { Link, Outlet } from "react-router-dom";
import LoginButton from "../../LoginButton";

import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <header>
        <div className="wrapper">
          <img src='./Logo.png' className="logo" alt="Logo" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>
          </nav>
          <LoginButton />
        </div>
      </header>
      <Outlet />

    </>
  );
};

export default Navigation;
