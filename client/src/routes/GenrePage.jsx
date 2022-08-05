import React from "react";
import Header from "../components/Header";
import AllAnimeInGivenGenre from "../components/AllAnimeInGivenGenre";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <AllAnimeInGivenGenre />
    </div>
  );
};

export default Home;