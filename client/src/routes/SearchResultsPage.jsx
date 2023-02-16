import React from "react";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import NavBar from "../components/NavBar";

const SearchResultsPage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <SearchResults />
    </div>
  );
};

export default SearchResultsPage;