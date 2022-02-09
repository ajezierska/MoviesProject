import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <h1>Movies Project</h1>
      <Link to="/moviesToWatch">
        <button>Movies To Watch</button>
      </Link>
      <Link to="/favouriteMovies">
        <button>Favourite Movies</button>
      </Link>
    </div>
  );
};
