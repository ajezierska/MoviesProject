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
  default: "Release Date",
  key: "filterDateState",
});

export const filterGenreState = atom({
  default: "Genre",
  key: "filterGenreState",
});

export const sortValueState = atom({
  default: "",
  key: "sortValueState",
});

export const dataSortState = atom({
  default: "",
  key: "dataSortState",
});

export const moviesToWatchState = atom({
  default: [],
  key: "moviesToWatchState",
});

export const favouriteMoviesState = atom({
  default: [],
  key: "favouriteMoviesState",
});
