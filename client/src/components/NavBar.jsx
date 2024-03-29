import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const NavBar = () => {
  const history = useHistory();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
  }, []);

  const logout = () => {
    localStorage.clear();
    history.push('/login/');
    window.location.reload();
  };

  return (
    <div className="container-fullwidth">
<nav className="navbar-expand-lg" style={{backgroundColor: "#737373"}}>
  <div className="row align-items-start" id="navbarSupportedContent">
  <div className="col-6 ">
        <Link to={"/"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink" tabindex='-1'>
          Home
        </Link>
        {localStorage.getItem("authenticatedUser") != null && (
          <Link to={"/anime/new"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink" tabindex='-1'>
            New Anime
          </Link>
        )}
        {localStorage.getItem("authenticatedUser") != null && (
          <Link to={"/genre/new"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink" tabindex='-1'>
            New Genre
          </Link>
        )}
        <Link to={"/anime/"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink" tabindex='-1'>
          All Anime
        </Link>
        {localStorage.getItem("authenticatedUser") == null && (
          <Link to={"/register/"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink" tabindex='-1'>
            Register
          </Link>
        )}
        {localStorage.getItem("authenticatedUser") == null && (
          <Link to={"/login/"} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink" tabindex='-1'>
            Login
          </Link>
        )}
        {localStorage.getItem("authenticatedUser") != null && (
          <Link to={"/"} onClick={logout} className="navbar-brand font-weight-bold shadow-sm p-3 mb-5 rounded navLink" tabindex='-1'>
            Logout
          </Link>
        )}
        </div>
        <div className="col-6 ">
        <SearchBar></SearchBar>
        </div>
          </div>
            
</nav>
</div>


  );
};

export default NavBar;
