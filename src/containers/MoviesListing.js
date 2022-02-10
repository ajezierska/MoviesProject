import React from "react";
import { useRecoilValue } from "recoil";
import { moviesState } from "../atoms";
import { MovieButtons } from "./MovieButtons";
import { Grid, Container, Spinner } from "@theme-ui/components";
import { MovieComponent } from "./MovieComponent";

export const MoviesListing = () => {
  const moviesData = useRecoilValue(moviesState);

  return (
    <Grid variant="mainGrid">
      {moviesData.length !== 0 ? (
        moviesData.map((movie) => (
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
        <Spinner size={80} variant="styles.spinner" />
      )}
    </Grid>
  );
};
