import React from "react";
import Header from "../components/Header";
import AddAnime from "../components/AddAnime";
import ShowPage from "../components/ShowPage";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <ShowPage />
    </div>
  );
};

export default Home;