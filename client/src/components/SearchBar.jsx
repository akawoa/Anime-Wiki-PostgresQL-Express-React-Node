import React, { useEffect, useContext, useState } from "react";
import { getAnimeInGenre } from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { useHistory, useParams, Redirect, Link } from "react-router-dom";
import MyLoader from "./MyLoader";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (search) => {
    // e.preventDefault(); 
    if (!search) {
      return;
    }
    window.location.href=(`/anime/search/${search}`);
      <Redirect to={`/anime/search/${search}`} />;
    };

  const handleKeyPress = (e) => {
    // console.log(`The keyboard key that was pressed was: ${e.keyCode}`);
    if (e.keyCode === 13) {
      handleSubmit(search);
    }
}

  return (
    <div className="">
<div className="input-group rounded w-50s">
  <input type="search" className="form-control rounded" onChange={handleSearch} onKeyDown={handleKeyPress} placeholder="Search" aria-label="Search" aria-describedby="search-addon" tabindex='0' />
  <span className="input-group-text border-0 navLink" id="search-addon">
  <Link to={`/anime/search/${search}`}><i className="fas fa-search" onClick={handleSubmit}></i></Link>
  </span>
</div>
</div>
  );
};

export default SearchBar;
