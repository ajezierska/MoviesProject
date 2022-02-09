import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  moviesState,
  searchState,
  filterDateState,
  filterGenreState,
} from "../atoms";

import { MoviesListing } from "./MoviesListing";
import { Search } from "./Search";
import { Filter } from "./Filter";

export const Dashboard = () => {
  const [, setMovies] = useRecoilState(moviesState);
  const searchTerm = useRecoilState(searchState);
  const filterGenre = useRecoilState(filterGenreState);
  const filterDate = useRecoilState(filterDateState);

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

  useEffect(
    () => {
      const fetchData = async () => {
        const genre = filterGenre[0];
        const date = filterDate[0];
        if (genre === "all" && date === "all") return;
        const releaseDateparams =
          date === "all" ? "" : `&primary_release_year=${date}`;
        const genreParams = genre === "all" ? "" : `&with_genres=${genre}`;
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=07110192b3fd8b432cc796b4c48dd507${releaseDateparams}${genreParams}`;
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      };
      fetchData();
    },
    [filterGenre[0], filterDate[0], searchTerm[0]]
  );

  return (
    <div>
      <Search />
      <Filter />
      <MoviesListing />
    </div>
  );
};
