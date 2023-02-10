import React from "react";

const Header = () => {
  return (
    <div style={{backgroundColor: "#FFA500"}}>
      <h1 className="font-weight-normal text-light display-1 text-center">Anime Wiki</h1>
      {localStorage.getItem("authenticatedUser") != null && (
        <h1 className="font-weight-light text-center">
          Greetings {localStorage.getItem("first_name")}!
        </h1>
      )}
    </div>
  );
};

export default Header;
