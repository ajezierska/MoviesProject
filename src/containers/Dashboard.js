import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { moviesState, searchState } from "../atoms";

import { MoviesListing } from "./MoviesListing";
import { Search } from "./Search";
import { Filter } from "./Filter";

export const Dashboard = () => {
  const [, setMovies] = useRecoilState(moviesState);
  const searchTerm = useRecoilState(searchState);

  useEffect(() => {
    const fetchData = async () => {
      const query = searchTerm[0];
      const urlAllMovies =
        "https://api.themoviedb.org/3/movie/now_playing?api_key=07110192b3fd8b432cc796b4c48dd507";
      const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=07110192b3fd8b432cc796b4c48dd507&query=${query}`;
      let url;
      url = searchTerm[0] === "" ? urlAllMovies : urlSearch;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchData();
  }, [searchTerm[0], setMovies]);

  return (
    <div>
      <Search />
      <Filter />
      <MoviesListing />
    </div>
  );
};
