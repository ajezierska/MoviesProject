import { atom } from "recoil";

export const searchState = atom({
  default: "",
  key: "searchState",
});

export const moviesState = atom({
  default: [],
  key: "moviesState",
});

export const filterDateState = atom({
  default: "all",
  key: "filterDateState",
});

export const filterGenreState = atom({
  default: "all",
  key: "filterGenreState",
});
