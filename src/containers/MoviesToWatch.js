import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { moviesToWatchState } from "../atoms";
import { MovieButtons } from "./MovieButtons";
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  Container,
} from "@theme-ui/components";
import { MovieComponent } from "./MovieComponent";
import { HomepageButton } from "./HomepageButton";

export const MoviesToWatch = () => {
  const moviesToWatch = useRecoilValue(moviesToWatchState);
  const setMoviesToWatch = useSetRecoilState(moviesToWatchState);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("movies_to_watch"));
    if (data) setMoviesToWatch(data);
  }, [setMoviesToWatch]);

  return (
    <>
      <Box bg="primary">
        <Container sx={{ maxWidth: "70rem" }}>
          <Flex
            color="secondaryText"
            variant="styles.spaceBetween"
            sx={{ padding: "1.5rem 0.5rem" }}
          >
            <Heading>My Movies to watch</Heading>
            <HomepageButton />
          </Flex>
        </Container>
      </Box>
      <Grid variant="mainGrid">
        {moviesToWatch.length !== 0 ? (
          moviesToWatch.map((movie) => (
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
