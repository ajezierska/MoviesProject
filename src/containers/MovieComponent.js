import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { favouriteMoviesState, moviesToWatchState } from "../atoms";

export const MovieComponent = ({ movie }) => {
  const [moviesToWatch, setMoviesToWatch] = useRecoilState(moviesToWatchState);
  const [favouriteMovies, setFavouriteMovies] =
    useRecoilState(favouriteMoviesState);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("movies_to_watch"));
    if (data) setMoviesToWatch(data);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favourite_movies"));
    if (data) setFavouriteMovies(data);
  }, []);

  useEffect(() => {
    if (moviesToWatch.length === 0) return;
    localStorage.setItem("movies_to_watch", JSON.stringify(moviesToWatch));
  }, [moviesToWatch]);

  useEffect(() => {
    if (favouriteMovies.length === 0) return;
    localStorage.setItem("favourite_movies", JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);

  const handleAddToWatch = (movie) => {
    if (moviesToWatch.find((el) => el.id === movie.id)) {
      const newArr = moviesToWatch.filter((el) => {
        return el.id !== movie.id;
      });
      setMoviesToWatch(newArr);
    } else {
      setMoviesToWatch([...moviesToWatch, movie]);
    }
  };

  const handleFavouriteMovies = (movie) => {
    if (favouriteMovies.find((el) => el.id === movie.id)) {
      const newArr = favouriteMovies.filter((el) => {
        return el.id !== movie.id;
      });
      setFavouriteMovies(newArr);
    } else {
      setFavouriteMovies([...favouriteMovies, movie]);
    }
  };

  return (
    <>
      <button onClick={() => handleAddToWatch(movie)}>
        {moviesToWatch.find((el) => el.id === movie.id)
          ? "remove from add to watch"
          : "Add to watch"}
      </button>
      <button onClick={() => handleFavouriteMovies(movie)}>
        {favouriteMovies.find((el) => el.id === movie.id)
          ? "remove from favourite"
          : "Add to favourtite"}
      </button>
    </>
  );
};
