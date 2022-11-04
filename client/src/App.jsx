import "./App.css";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import RegistrationPage from "./routes/RegistrationPage";
import LoginPage from "./routes/LoginPage";
import NewAnime from "./routes/NewAnime";
import NewGenre from "./routes/NewGenre";
import AnimeDetailPage from "./routes/AnimeDetailPage";
import UpdatePage from "./routes/UpdatePage";
import UpdateGenre from "./routes/UpdateGenre";
import GenrePage from "./routes/GenrePage";
import ErrorPage from "./routes/ErrorPage";
import AllAnimeList from "./routes/AllAnimeList";
import { AnimeContextProvider } from "./context/AnimeContext";
import { GenresContextProvider } from "./context/GenreContext";
import { UsersContextProvider } from "./context/UserContext";

const App = (async) => {
  return (
    <AnimeContextProvider>
      <GenresContextProvider>
        <UsersContextProvider>
          <div className="container">
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/register">
                  <RegistrationPage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
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
                <Route exact path="/genre/:id/update">
                  <UpdateGenre />
                </Route>
                <Route exact path="/anime/genre/:id">
                  <GenrePage />
                </Route>
                <Route exact path="/error">
                  <ErrorPage />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </UsersContextProvider>
      </GenresContextProvider>
    </AnimeContextProvider>
  );
};

export default App;
