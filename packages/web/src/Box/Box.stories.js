import React from "react";
import { storiesOf } from "@storybook/react";

import Code from "../Code";
import Box from "./Box";

storiesOf("Box", module)
  .add("Basic", () => (
    <Box>
      <Box>Basic example</Box>
      <Box gutterX="base" gutterY="smallest">
        With <Code>gutterX="base" gutterY="smallest"</Code>
      </Box>
    </Box>
  ))
  .add("Border", () => (
    <Box border>
      Box with <Code>border</Code>
    </Box>
  ))
  .add("Backgrounds", () => (
    <Box>
      <Box gutterX="base" gutterY="base" background="primary">
        With <Code>background="primary"</Code>
      </Box>
      <Box gutterX="base" gutterY="base" background="secondary">
        With <Code>background="secondary"</Code>
      </Box>
      <Box gutterX="base" gutterY="base" background="success">
        With <Code>background="success"</Code>
      </Box>
      <Box gutterX="base" gutterY="base" background="danger">
        With <Code>background="danger"</Code>
      </Box>
      <Box gutterX="base" gutterY="base" background="muted">
        With <Code>background="muted"</Code>
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
        Example Box using <Code>weight="lighter"</Code>
      </Box>
      <Box weight="normal">
        Example Box using <Code>weight="normal"</Code>
      </Box>
      <Box weight="bold">
        Example Box using <Code>weight="bold"</Code>
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
        <Code>align="left"</Code>
      </Box>
      <Box align="center">
        <Code>align="center"</Code>
      </Box>
      <Box align="right">
        <Code>align="right"</Code>
      </Box>
    </Box>
  ));
