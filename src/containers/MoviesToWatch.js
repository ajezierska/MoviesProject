import React from "react";
import { useRecoilValue } from "recoil";
import { moviesToWatchState } from "../atoms";
import { MovieComponent } from "./MovieComponent";
import { Link } from "react-router-dom";

export const MoviesToWatch = () => {
  const moviesToWatch = useRecoilValue(moviesToWatchState);

  return (
    <div>
      <h1>My Movies to watch</h1>
      {moviesToWatch.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          <MovieComponent movie={movie} />
        </div>
      ))}
    </div>
  );
};
