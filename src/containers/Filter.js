import { Select, Text, Container } from "@theme-ui/components";
import React, { useState, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { searchState, filterDateState, filterGenreState } from "../atoms";
import {createArr} from "../utils/utils"

export const Filter = () => {
  const [genres, setGenres] = useState([]);
  const [filterGenre, setFilterGenre] = useRecoilState(filterGenreState);
  const [filterDate, setFilterDate] = useRecoilState(filterDateState);
  const resetSearchValue = useResetRecoilState(searchState);
  const arrOfDate = createArr();

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.themoviedb.org/3/genre/movie/list?api_key=07110192b3fd8b432cc796b4c48dd507";
      const response = await fetch(url);
      const data = await response.json();
      setGenres(data.genres);
    };
    fetchData();
  }, []);

  const handleFilterGenre = (e) => {
    setFilterGenre(e.target.value);
    resetSearchValue();
  };

  const handleFilterDate = (e) => {
    setFilterDate(e.target.value);
    resetSearchValue();
  };

  return (
    <>
    <Container variant="filterContainer">
    <Text>
      Filters:
    </Text>
      <Select variant='filter' value={filterDate} onChange={(e) => handleFilterDate(e)}>
        <option value="Release Date">Release date</option>
        {arrOfDate.map((date) => (
          <option value={date} key={date}>
            {date}
          </option>
        ))}
      </Select>
      <Select sx={{marginLeft: 0, '@media (min-width: 768px)': { marginLeft: 2 }}} variant='filter' value={filterGenre} onChange={(e) => handleFilterGenre(e)}>
        <option value="Genre">Genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </Select>
    </Container>
    </>
  );
};
