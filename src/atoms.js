import { selector } from "recoil";

export const moviesListSelector = selector({
  key: "moviesListSelector",
  get: async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=07110192b3fd8b432cc796b4c48dd507"
    );
    const data = await response.json();
    console.log("🚀 ~ file: atoms.js ~ line 8 ~ get: ~ data", data);

    return data.results;
  },
});
