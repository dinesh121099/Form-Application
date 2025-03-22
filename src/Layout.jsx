import React from "react";
import "./Layout.css";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="app-container">
        <header>
          <div className="nav">
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
            <NavLink className="navlink" to="/data">
              Data
            </NavLink>
            <NavLink className="navlink" to="/stats">
              Statistics
            </NavLink>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>Footer Content</footer>
      </div>
    </>
  );
};

export default Layout;
