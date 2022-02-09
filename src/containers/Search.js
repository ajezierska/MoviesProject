import React, { useRef } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { searchState, filterGenreState, filterDateState } from "../atoms";

export const Search = (props) => {
  const inputEl = useRef("");
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const resetGenreFilter = useResetRecoilState(filterGenreState)
  const resetDateFilter = useResetRecoilState(filterDateState)
  
  const handleSearch = () => {
    setSearchTerm(inputEl.current.value);
    resetGenreFilter()
    resetDateFilter()
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movie"
        value={searchTerm}
        ref={inputEl}
        onChange={handleSearch}
      />
    </div>
  );
};
