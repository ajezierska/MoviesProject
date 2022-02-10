import { Input } from "@theme-ui/components";
import React, { useRef } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  searchState,
  filterGenreState,
  filterDateState,
  dataSortState,
  sortValueState,
} from "../atoms";

export const Search = () => {
  const inputEl = useRef("");
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const resetGenreFilter = useResetRecoilState(filterGenreState);
  const resetDateFilter = useResetRecoilState(filterDateState);
  const resetSortData = useResetRecoilState(dataSortState);
  const resetSortValue = useResetRecoilState(sortValueState);

  const handleSearch = () => {
    setSearchTerm(inputEl.current.value);
    resetGenreFilter();
    resetDateFilter();
    resetSortData();
    resetSortValue();
  };

  return (
    <Input
      variant="search"
      type="text"
      placeholder="Search movie"
      value={searchTerm}
      ref={inputEl}
      onChange={handleSearch}
    />
  );
};
