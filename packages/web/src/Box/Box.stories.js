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
  .add("Border", () => (
    <Box border>
      Box with <code>border</code>
    </Box>
  ))
  .add("Backgrounds", () => (
    <Box>
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
    </Box>
  ))
  .add("Colors", () => (
    <Box>
      <Box>Basic example</Box>
      <Box color="primary">Basic example (primary)</Box>
      <Box color="secondary">Basic example (secondary)</Box>
      <Box color="success">Basic example (success)</Box>
      <Box color="danger">Basic example (danger)</Box>
      <Box color="muted">Basic example (muted)</Box>
    </Box>
  ))
  .add("Weights", () => (
    <Box>
      <Box weight="lighter">
        Example Box using <code>weight="lighter"</code>
      </Box>
      <Box weight="normal">
        Example Box using <code>weight="normal"</code>
      </Box>
      <Box weight="bold">
        Example Box using <code>weight="bold"</code>
      </Box>
    </Box>
  ))
  .add("Levels", () => (
    <Box>
      <Box level={1}>The quick brown fox jumps over the lazy dog</Box>
      <Box level={2}>The quick brown fox jumps over the lazy dog</Box>
      <Box level={3}>The quick brown fox jumps over the lazy dog</Box>
      <Box level={4}>The quick brown fox jumps over the lazy dog</Box>
      <Box level={5}>The quick brown fox jumps over the lazy dog</Box>
      <Box level={6}>The quick brown fox jumps over the lazy dog</Box>
    </Box>
  ))
  .add("Alignment", () => (
    <Box>
      <Box align="left">
        <code>align="left"</code>
      </Box>
      <Box align="center">
        <code>align="center"</code>
      </Box>
      <Box align="right">
        <code>align="right"</code>
      </Box>
    </Box>
  ));
