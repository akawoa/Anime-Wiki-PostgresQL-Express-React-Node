import React, { useState, createContext } from "react";

export const AnimeContext = createContext();

export const AnimeContextProvider = (props) => {
  const [anime, setAnime] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);

  const addAnime = (show) => {
    setAnime([...anime, show]);
  };
  return (
    <AnimeContext.Provider
      value={{
        anime,
        setAnime,
        addAnime,
        selectedAnime,
        setSelectedAnime,
      }}
    >
      {props.children}
    </AnimeContext.Provider>
  );
};
