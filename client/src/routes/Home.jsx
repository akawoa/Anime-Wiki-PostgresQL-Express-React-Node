import React from "react";
import Header from "../components/Header";
import AddGenre from "../components/AddGenre";
import AnimeList from "../components/AnimeList";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <AddGenre />
      <GenreList />
      <AnimeList />

    </div>
  );
};

export default Home;