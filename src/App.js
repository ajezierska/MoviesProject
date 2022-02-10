import React from "react";
import { Dashboard } from "./containers/Dashboard";
import { MoviesToWatch } from "./containers/MoviesToWatch";
import { MovieDetail } from "./containers/MovieDetail";
import { FavouriteMovies } from "./containers/FavouriteMovies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/moviesToWatch" element={<MoviesToWatch />} />
          <Route exact path="/favouriteMovies" element={<FavouriteMovies />} />
          <Route exact path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
