import { Box, Button, Heading, Container } from "theme-ui";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box bg="primary">
      <Container
        p={2}
        sx={{ maxWidth: "70rem" }}
        color="white"
        bg="primary"
        variant="flexContainer"
      >
        <Heading as="h1">Movies Project</Heading>
        <Box>
          <Link to="/moviesToWatch">
            <Button variant="default" bg="secondary" mr={2}>
              Movies To Watch
            </Button>
          </Link>
          <Link to="/favouriteMovies">
            <Button variant="default" bg="orange">
              Favourite Movies
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
