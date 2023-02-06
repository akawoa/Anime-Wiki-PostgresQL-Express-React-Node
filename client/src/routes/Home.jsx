import React from "react";
import Header from "../components/Header";
import AnimeList from "../components/AnimeList";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <GenreList />
    </div>
  );
};

export default Home;