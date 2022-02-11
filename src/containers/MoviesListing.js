import React from "react";
import { useRecoilValue } from "recoil";
import { moviesState, showSpinnerState } from "../atoms";
import { MovieButtons } from "./MovieButtons";
import { Grid, Container, Spinner, Text, Box } from "@theme-ui/components";
import { MovieComponent } from "./MovieComponent";

export const MoviesListing = () => {
  const moviesData = useRecoilValue(moviesState);
  const showSpinner = useRecoilValue(showSpinnerState);

  return (
    <Grid variant="mainGrid" sx={{ position: "relative" }}>
      {moviesData && moviesData.length !== 0 ? (
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
        <Box variant="styles.center">
          <Text>no movies</Text>
        </Box>
      )}
      {showSpinner && (
        <Box bg="background" variant="styles.spinnerContainer">
          <Spinner bg="background" variant="styles.center" size={90} />
        </Box>
      )}
    </Grid>
  );
};
