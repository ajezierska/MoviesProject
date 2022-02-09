import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { MovieComponent } from "./MovieComponent";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState("");
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=07110192b3fd8b432cc796b4c48dd507`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieDetail(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <MovieComponent movie={movieDetail} />
      <img src={`${imageUrl}${movieDetail.backdrop_path}`} />
      <h2>{movieDetail.title}</h2>
      <a href={movieDetail.homepage} target="_blank">
        Homepage
      </a>
      <p>{movieDetail.overview}</p>
      <p>Release Date: {movieDetail.release_date}</p>
      <p>Runtime: {movieDetail.runtime} min</p>
      <p>vote average: {movieDetail.vote_average}</p>
      <p>
        Production campanies:{" "}
        {movieDetail &&
          movieDetail.production_companies.map((company) => company.name)}
      </p>
      <p>
        Genres:{" "}
        {movieDetail && movieDetail.genres.map((genre) => `${genre.name}, `)}
      </p>
      <Link to="/">back</Link>
    </div>
  );
};
