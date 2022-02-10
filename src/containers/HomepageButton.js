import React from "react";
import { Text, Button } from "@theme-ui/components";
import { Link } from "react-router-dom";

export const HomepageButton = () => {
  return (
    <Button bg="added" variant="backButton">
      <Text variant="links">
        <Link to="/">back</Link>
      </Text>
    </Button>
  );
};
