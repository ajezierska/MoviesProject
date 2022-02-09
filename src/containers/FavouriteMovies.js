import React from "react";
import { useRecoilValue } from "recoil";
import { favouriteMoviesState } from "../atoms";
import { MovieComponent } from "./MovieComponent";
import { Link } from "react-router-dom";

export const FavouriteMovies = () => {
  const favouriteMovies = useRecoilValue(favouriteMoviesState);

  return (
    <div>
      <h1>Favourite Movies</h1>
      {favouriteMovies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          <MovieComponent movie={movie} />
        </div>
      ))}
    </div>
  );
};
