import React from "react";
import Header from "../components/Header";
import ErrorPage from "../components/ErrorPage";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <ErrorPage />
    </div>
  );
};

export default Home;