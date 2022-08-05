import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import NewAnime from "./routes/NewAnime";
import NewGenre from "./routes/NewGenre";
import AnimeDetailPage from "./routes/AnimeDetailPage";
import UpdatePage from "./routes/UpdatePage";
import GenrePage from "./routes/GenrePage";
import { AnimeContextProvider } from "./context/AnimeContext";
import { GenresContextProvider } from "./context/GenreContext";

const App = () => {
  return (
    <AnimeContextProvider>
      <GenresContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/anime/new" component={NewAnime} />
            <Route exact path="/anime/:id/update" component={UpdatePage} />
            <Route exact path="/anime/:id" component={AnimeDetailPage} />
            <Route exact path="/genre/new" component={NewGenre} />
            <Route exact path="/anime/genre/:id" component={GenrePage} />
          </Switch>
        </Router>
      </div>
      </GenresContextProvider>
    </AnimeContextProvider>
  );
};

export default App;
