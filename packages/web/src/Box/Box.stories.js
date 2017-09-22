import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";

storiesOf("Box", module)
  .add("Basic", () => (
    <div>
      <Box>Basic example</Box>
      <Box disableGutter>
        With <code>disableGutter</code>
      </Box>
      <Box disableBorder>
        With <code>disableBorder</code>
      </Box>
    </div>
  ))
  .add("Backgrounds", () => (
    <div>
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
    </div>
  ));
