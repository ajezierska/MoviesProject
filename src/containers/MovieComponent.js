import React from "react";
import { Container, Flex, Image, Text } from "@theme-ui/components";
import { Link } from "react-router-dom";

export const MovieComponent = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <Link to={`/movie/${movie.id}`} style={{ height: "100%" }}>
        <Container variant="movieImageContainer">
          <Flex p={2} variant="styles.spaceBetween">
            <Text variant="links">{movie.title}</Text>
            <Text variant="rate" color="rate" fontSize="3">
              {movie.vote_count ? movie.vote_average : "no votes"}
            </Text>
          </Flex>
          {movie.backdrop_path ? (
            <Image
              variant="fullWidth"
              src={`${imageUrl}${movie.backdrop_path}`}
            />
          ) : (
            <Flex
              bg="lightGray"
              variant="styles.flexCenter"
              sx={{ height: "100%" }}
            >
              <Text color="secondaryText">No image</Text>
            </Flex>
          )}
        </Container>
      </Link>
    </>
  );
};
