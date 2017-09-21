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
      <Box background="brandPrimary">
        With <code>background="brandPrimary"</code>
      </Box>
      <Box background="brandSecondary">
        With <code>background="brandSecondary"</code>
      </Box>
      <Box background="brandSuccess">
        With <code>background="brandSuccess"</code>
      </Box>
      <Box background="brandDanger">
        With <code>background="brandDanger"</code>
      </Box>
      <Box background="brandMuted">
        With <code>background="brandMuted"</code>
      </Box>
    </Container>
  ));
