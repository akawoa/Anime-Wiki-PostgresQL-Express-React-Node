import React from "react";
import Header from "../components/Header";
import AddAnime from "../components/AddAnime";
import AnimeList from "../components/AnimeList";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <AnimeList />
    </div>
  );
};

export default Home;