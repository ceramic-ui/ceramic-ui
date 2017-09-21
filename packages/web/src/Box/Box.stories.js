import React from "react";
import { storiesOf } from "@storybook/react";

import Container from "../Container";
import Box from "./Box";

storiesOf("Box", module)
  .add("Basic", () => (
    <Container>
      <Box>Basic example</Box>
      <Box disableGutter>
        With <code>disableGutter</code>
      </Box>
      <Box disableBorder>
        With <code>disableBorder</code>
      </Box>
    </Container>
  ))
  .add("Backgrounds", () => (
    <Container>
      <Box background="primary">
        With <code>background="primary"</code>
      </Box>
      <Box background="secondary">
        With <code>background="secondary"</code>
      </Box>
      <Box background="success">
        With <code>background="success"</code>
      </Box>
      <Box background="danger">
        With <code>background="danger"</code>
      </Box>
      <Box background="muted">
        With <code>background="muted"</code>
      </Box>
    </Container>
  ));
