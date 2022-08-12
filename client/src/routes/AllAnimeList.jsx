import React from "react";
import Header from "../components/Header";
import AnimeList from "../components/AnimeList";
import NavBar from "../components/NavBar";

const AllAnimeList = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <AnimeList />
    </div>
  );
};

export default AllAnimeList;