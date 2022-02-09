import React from "react";
import { useRecoilValue } from "recoil";
import { moviesState } from "../atoms";
import { Link } from "react-router-dom";
import { MovieComponent } from "./MovieComponent";

export const MoviesListing = () => {
  const moviesData = useRecoilValue(moviesState);

  return (
    <div>
      {moviesData &&
        moviesData.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            <MovieComponent movie={movie} />
          </div>
        ))}
    </div>
  );
};
