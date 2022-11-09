import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <header className="font-weight-light display-4">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>
        {localStorage.getItem("authenticatedUser") != null && (
          <Link to={"/anime/new"} className="navbar-brand">
            New Anime
          </Link>
        )}
        {localStorage.getItem("authenticatedUser") != null && (
          <Link to={"/genre/new"} className="navbar-brand">
            New Genre
          </Link>
        )}
        <Link to={"/anime/"} className="navbar-brand">
          All Anime
        </Link>
        {localStorage.getItem("authenticatedUser") == null && (
          <Link to={"/register/"} className="navbar-brand">
            Register
          </Link>
        )}
        {localStorage.getItem("authenticatedUser") == null && (
          <Link to={"/login/"} className="navbar-brand">
            Login
          </Link>
        )}
        {localStorage.getItem("authenticatedUser") != null && (
          <Link to={"/"} className="navbar-brand" onClick={logout}>
            Logout
          </Link>
        )}
      </header>
    </div>
  );
};

export default NavBar;
