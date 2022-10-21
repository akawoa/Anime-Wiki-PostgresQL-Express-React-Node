import React from "react";
import UpdateGenre from "../components/UpdateGenre";
import NavBar from "../components/NavBar"
const UpdatePage = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-center">Update Genre</h1>
      <UpdateGenre />
    </div>
  );
};

export default UpdatePage;