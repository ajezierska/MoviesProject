import { Button, Flex } from "@theme-ui/components";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { favouriteMoviesState, moviesToWatchState } from "../atoms";

export const MovieButtons = ({ movie }) => {
  const [moviesToWatch, setMoviesToWatch] = useRecoilState(moviesToWatchState);
  const [favouriteMovies, setFavouriteMovies] =
    useRecoilState(favouriteMoviesState);

  const isFavourite = favouriteMovies.find((el) => el.id === movie.id);
  const isToWatch = moviesToWatch.find((el) => el.id === movie.id);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("movies_to_watch"));
    if (data) setMoviesToWatch(data);
  }, [setMoviesToWatch]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favourite_movies"));
    if (data) setFavouriteMovies(data);
  }, [setFavouriteMovies]);

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
    <Flex variant='styles.spaceBetween'>
      <Button
        mr={2}
        variant="small"
        bg={isToWatch ? "gray" : "primary"}
        onClick={() => handleAddToWatch(movie)}
      >
        {isToWatch ? "remove from watchlist" : "add to watchlist"}
      </Button>
      <Button
        variant="small"
        bg={isFavourite ? "gray" : "orange"}
        onClick={() => handleFavouriteMovies(movie)}
      >
        {isFavourite ? "remove from favourite" : "add to favourite"}
      </Button>
    </Flex>
  );
};
