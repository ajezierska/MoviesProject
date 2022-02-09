import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "../atoms";

export const Search = () => {
  const inputEl = useRef("");
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const handleSearch = () => {
    setSearchTerm(inputEl.current.value);
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
