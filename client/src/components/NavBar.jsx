import React from "react";
import {Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <header className="font-weight-light display-4">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>
        <Link to={"/anime/new"} className="navbar-brand">
          New Anime
        </Link>
      </header>
    </div>
  );
};

export default NavBar;
