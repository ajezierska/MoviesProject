import React from "react";
import { useRecoilState } from "recoil";
import { moviesState } from "../atoms";

export const MoviesListing = () => {
  const moviesData = useRecoilState(moviesState);
  return (
    <div>
      {moviesData &&
        moviesData[0].map((movie) => <li key={movie.id}>{movie.title}</li>)}
    </div>
  );
};
