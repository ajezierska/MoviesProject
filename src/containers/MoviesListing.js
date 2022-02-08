import React from "react";
import { useRecoilValue } from "recoil";
import { moviesListSelector } from "../atoms";

export const MoviesListing = () => {
  const moviesData = useRecoilValue(moviesListSelector);
  return (
    <div>
      {moviesData.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </div>
  );
};
