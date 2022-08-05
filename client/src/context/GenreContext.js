import React, { useState, createContext } from "react";

export const GenresContext = createContext();

export const GenresContextProvider = (props) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const addGenres = (genre) => {
    setGenres([...genres, genre]);
  };
  return (
    <GenresContext.Provider
      value={{
        genres,
        setGenres,
        addGenres,
        selectedGenre,
        setSelectedGenre,
      }}
    >
      {props.children}
    </GenresContext.Provider>
  );
};
