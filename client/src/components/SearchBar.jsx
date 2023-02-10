import React, { useEffect, useContext, useState } from "react";
import { getAnimeInGenre } from "../apis/AnimeFinder";
import { AnimeContext } from "../context/AnimeContext";
import { useHistory, useParams, Redirect, Link } from "react-router-dom";
import MyLoader from "./MyLoader";

const SearchBar = (props) => {
    const { id } = useParams();
  const { search, setSearch } = "";
  let history = useHistory();
  const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
  };
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getAnimeInGenre(id);
  //       setRequestStatus(REQUEST_STATUS.SUCCESS);
  //       console.log(response.data.data);
  //       setAnime(response.data.data.anime);
  //     } catch (err) {
  //       setRequestStatus(REQUEST_STATUS.FAILURE);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (requestStatus === REQUEST_STATUS.LOADING) return <MyLoader></MyLoader>;
  // if (requestStatus === REQUEST_STATUS.FAILURE) <Redirect to="/error" />;

  return (
    <div className="">
<div class="input-group rounded w-50s">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0 navLink" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
</div>
  );
};

export default SearchBar;
