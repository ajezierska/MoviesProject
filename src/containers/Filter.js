import React, { useState, useEffect, useRef } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { searchState, filterDateState, filterGenreState } from "../atoms";

export const Filter = () => {
  const [genres, setGenres] = useState([]);
  const [filterGenre, setFilterGenre] = useRecoilState(filterGenreState);
  const [filterDate, setFilterDate] = useRecoilState(filterDateState);
  const resetSearchValue = useResetRecoilState(searchState);

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

  const createArr = () => {
    const today = new Date().getFullYear();
    let arrOfDate = [];
    for (let i = 1874; i <= today; i++) {
      arrOfDate.push(i);
    }
    return arrOfDate;
  };
  const arrOfDate = createArr();
  return (
    <>
      <select value={filterDate} onChange={(e) => handleFilterDate(e)}>
        <option value="all">all</option>
        {arrOfDate.map((date) => (
          <option value={date} key={date}>
            {date}
          </option>
        ))}
      </select>
      <select value={filterGenre} onChange={(e) => handleFilterGenre(e)}>
        <option value="all">all</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </>
  );
};
