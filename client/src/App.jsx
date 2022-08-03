import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import NewAnime from "./routes/NewAnime";
import NewGenre from "./routes/NewGenre";
import AnimeDetailPage from "./routes/AnimeDetailPage";
import UpdatePage from "./routes/UpdatePage";
import { AnimeContextProvider } from "./context/AnimeContext";

const App = () => {
  return (
    <AnimeContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/anime/new" component={NewAnime} />
            <Route exact path="/anime/:id/update" component={UpdatePage} />
            <Route exact path="/anime/:id" component={AnimeDetailPage} />
            <Route exact path="/genre/new" component={NewGenre} />
          </Switch>
        </Router>
      </div>
    </AnimeContextProvider>
  );
};

export default App;
