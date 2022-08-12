import "./App.css";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import NewAnime from "./routes/NewAnime";
import NewGenre from "./routes/NewGenre";
import AnimeDetailPage from "./routes/AnimeDetailPage";
import UpdatePage from "./routes/UpdatePage";
import GenrePage from "./routes/GenrePage";
import AllAnimeList from "./routes/AllAnimeList";
import { AnimeContextProvider } from "./context/AnimeContext";
import { GenresContextProvider } from "./context/GenreContext";

const App = (async) => {
  return (
    <AnimeContextProvider>
      <GenresContextProvider>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/anime">
              <AllAnimeList />
            </Route>
            <Route exact path="/anime/new">
              <NewAnime />
            </Route>
            <Route exact path="/anime/:id/update">
              <UpdatePage />
            </Route>
            <Route exact path="/anime/:id">
            <AnimeDetailPage />
            </Route>
            <Route exact path="/genre/new">
              <NewGenre />
            </Route>
            <Route exact path="/anime/genre/:id">
              <GenrePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      </GenresContextProvider>
    </AnimeContextProvider>
  );
};

export default App;
