import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { favouriteMoviesState } from "../atoms";
import { MovieButtons } from "./MovieButtons";
import { MovieComponent } from "./MovieComponent";
import { HomepageButton } from "./HomepageButton";
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  Container,
} from "@theme-ui/components";

export const FavouriteMovies = () => {
  const favouriteMovies = useRecoilValue(favouriteMoviesState);
  const setFavouriteState = useSetRecoilState(favouriteMoviesState);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favourite_movies"));
    if (data) setFavouriteState(data);
  }, [setFavouriteState]);

  return (
    <>
      <Box bg="primary">
        <Container sx={{ maxWidth: "70rem" }}>
          <Flex
            color="secondaryText"
            variant='styles.spaceBetween'
            sx={{padding: "1.5rem 0.5rem" }}
          >
            <Heading>Favourite Movies</Heading>
            <HomepageButton />
          </Flex>
        </Container>
      </Box>
      <Grid variant="mainGrid">
        {favouriteMovies.length !== 0 ? (
          favouriteMovies.map((movie) => (
            <Container
              variant="movieListContainer"
              key={movie.id}
              mt={2}
              mb={2}
              bg="secondary"
            >
              <MovieComponent movie={movie} />
              <MovieButtons movie={movie} />
            </Container>
          ))
        ) : (
          <Text>You don't have any favourite movies</Text>
        )}
      </Grid>
    </>
  );
};
