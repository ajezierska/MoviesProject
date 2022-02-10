import {
  Box,
  Image,
  Text,
  Flex,
  Container,
  Button,
  Heading,
  Paragraph,
} from "@theme-ui/components";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { HomepageButton } from "./HomepageButton";
import { MovieButtons } from "./MovieButtons";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState("");
  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=07110192b3fd8b432cc796b4c48dd507`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieDetail(data);
    };
    fetchData();
  }, [movieId]);

  return (
    <Container sx={{ maxWidth: "50rem" }}>
      {movieDetail.backdrop_path ? (
        <Image src={`${imageUrl}${movieDetail.backdrop_path}`} />
      ) : (
        <Flex
          bg="lightGray"
          variant="styles.flexCenter"
          sx={{ height: "13rem" }}
        >
          <Text color="textWhite">No image</Text>
        </Flex>
      )}
      <Container p={2}>
        <Heading>{movieDetail.title}</Heading>
        <Container variant="flexContainer">
          {movieDetail.homepage && (
            <Button variant="moviePage" mr={2}>
              <a href={movieDetail.homepage} target="_blank" rel="noopener noreferrer">
                page of movie
              </a>
            </Button>
          )}
          <MovieButtons movie={movieDetail} />
        </Container>
        <Paragraph variant="description" mt={2}>
          <Text color="rate">Description: </Text>
          {movieDetail.overview}
        </Paragraph>

        <Text color="rate">Release Date: </Text>
        <Text variant="description">
          {movieDetail.release_date ? movieDetail.release_date : "-"}
        </Text>
        <Box>
          <Text color="rate">Runtime: </Text>
          <Text variant="description">
            {movieDetail.runtime ? `${movieDetail.runtime} min` : "-"}
          </Text>
        </Box>
        <Text color="rate">vote average: </Text>
        <Text variant="description">
          {movieDetail.vote_average ? movieDetail.vote_average : "no votes"}
        </Text>
        <Box>
          <Text color="rate">Production campanies: </Text>
          <Text variant="description">
            {movieDetail && movieDetail.production_companies.lenght === 0
              ? movieDetail.production_companies.map((company) => company.name)
              : " -"}
          </Text>
        </Box>
        <Box mb={2}>
          <Text color="rate">Genres: </Text>
          <Text variant="description">
            {movieDetail && movieDetail.genres.length === 0
              ? movieDetail.genres.map((genre) => `${genre.name}, `)
              : " -"}
          </Text>
        </Box>
        <HomepageButton />
      </Container>
    </Container>
  );
};
