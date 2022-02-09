import { atom } from "recoil";

export const searchState = atom({
  default: "",
  key: "searchState",
});

export const moviesState = atom({
  default: [],
  key: "moviesState",
});
