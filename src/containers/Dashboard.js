import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  moviesState,
  searchState,
  filterDateState,
  filterGenreState,
  dataSortState
} from "../atoms";

import { MoviesListing } from "./MoviesListing";
import { Search } from "./Search";
import { Filter } from "./Filter";
import { Sort } from "./Sort";

export const Dashboard = () => {
  const [, setMovies] = useRecoilState(moviesState);
  const searchTerm = useRecoilValue(searchState);
  const filterGenre = useRecoilValue(filterGenreState);
  const filterDate = useRecoilValue(filterDateState);
  const sortData = useRecoilValue(dataSortState)

  useEffect(() => {
    const fetchData = async () => {
      const query = searchTerm;
      const urlAllMovies =
        "https://api.themoviedb.org/3/movie/now_playing?api_key=07110192b3fd8b432cc796b4c48dd507";
      const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=07110192b3fd8b432cc796b4c48dd507&query=${query}`;
      let url;
      url = searchTerm === "" ? urlAllMovies : urlSearch;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchData();
  }, [searchTerm, setMovies]);

  useEffect(
    () => {
      const fetchData = async () => {
        const genre = filterGenre;
        const date = filterDate;
        const sort = sortData;
        const releaseDateparams =
          date === "all" ? "" : `&primary_release_year=${date}`;
        const genreParams = genre === "all" ? "" : `&with_genres=${genre}`;
        const sortParams = sort === ""  ?  "" : `&sort_by=${sort}`;
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=07110192b3fd8b432cc796b4c48dd507${releaseDateparams}${genreParams}${sortParams}`;
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      };
      fetchData();
    },
    [filterGenre, filterDate, searchTerm, sortData]
  );

  return (
    <div>
      <Search />
      <Filter />
      <Sort />
      <MoviesListing />
    </div>
  );
};
