import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className="font-weight-light display-1 text-center">Anime Wiki</h1>
      {localStorage.getItem("authenticatedUser") != null && (
        <h2 className="font-weight-light text-center">
          Greetings {localStorage.getItem("first_name")}!
        </h2>
      )}
    </div>
  );
};

export default Header;
