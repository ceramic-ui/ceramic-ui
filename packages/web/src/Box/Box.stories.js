import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";

storiesOf("Box", module)
  .add("Basic", () => (
    <Box>
      <Box>Basic example</Box>
      <Box gutterX="base" gutterY="smallest">
        With <code>gutterX="base" gutterY="smallest"</code>
      </Box>
    </Box>
  ))
  .add("Backgrounds", () => (
    <div>
      <Box gutterX="base" gutterY="base" background="primary">
        With <code>background="primary"</code>
      </Box>
      <Box gutterX="base" gutterY="base" background="secondary">
        With <code>background="secondary"</code>
      </Box>
      <Box gutterX="base" gutterY="base" background="success">
        With <code>background="success"</code>
      </Box>
      <Box gutterX="base" gutterY="base" background="danger">
        With <code>background="danger"</code>
      </Box>
      <Box gutterX="base" gutterY="base" background="muted">
        With <code>background="muted"</code>
      </Box>
    </div>
  ));
