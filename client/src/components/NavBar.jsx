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
<nav className="navbar" style={{backgroundColor: "#737373"}}>
  <div id="navbarSupportedContent">
        <Link to={"/"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink">
          Home
        </Link>
        {localStorage.getItem("authenticatedUser") != null && (
          <Link to={"/anime/new"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink">
            New Anime
          </Link>
        )}
        {localStorage.getItem("authenticatedUser") != null && (
          <Link to={"/genre/new"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink">
            New Genre
          </Link>
        )}
        <Link to={"/anime/"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink">
          All Anime
        </Link>
        {localStorage.getItem("authenticatedUser") == null && (
          <Link to={"/register/"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink">
            Register
          </Link>
        )}
        {localStorage.getItem("authenticatedUser") == null && (
          <Link to={"/login/"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink">
            Login
          </Link>
        )}
        {localStorage.getItem("authenticatedUser") != null && (
          <Link to={"/"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink">
            Logout
          </Link>
        )}
              </div>
</nav>
</div>


  );
};

export default NavBar;
