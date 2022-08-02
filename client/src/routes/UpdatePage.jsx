import React from "react";
import UpdateAnime from "../components/UpdateAnime";
import NavBar from "../components/NavBar"
const UpdatePage = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-center">Update Anime</h1>
      <UpdateAnime />
    </div>
  );
};

export default UpdatePage;