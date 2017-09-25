import React from "react";
import { storiesOf } from "@storybook/react";

import Code from "../Code";
import Text from "./Text";

storiesOf("Text", module)
  .add("Colors", () => (
    <div>
      <Text>Basic example</Text>
      <br />
      <Text color="primary">Basic example (primary)</Text>
      <br />
      <Text color="secondary">Basic example (secondary)</Text>
      <br />
      <Text color="success">Basic example (success)</Text>
      <br />
      <Text color="danger">Basic example (danger)</Text>
      <br />
      <Text color="muted">Basic example (muted)</Text>
    </div>
  ))
  .add("Weights", () => (
    <div>
      <Text weight="lighter">
        Example text using <Code>weight="lighter"</Code>
      </Text>
      <br />
      <Text weight="normal">
        Example text using <Code>weight="normal"</Code>
      </Text>
      <br />
      <Text weight="bold">
        Example text using <Code>weight="bold"</Code>
      </Text>
    </div>
  ))
  .add("Levels", () => (
    <div>
      <Text level={1}>The quick brown fox jumps over the lazy dog</Text>
      <br />
      <Text level={2}>The quick brown fox jumps over the lazy dog</Text>
      <br />
      <Text level={3}>The quick brown fox jumps over the lazy dog</Text>
      <br />
      <Text level={4}>The quick brown fox jumps over the lazy dog</Text>
      <br />
      <Text level={5}>The quick brown fox jumps over the lazy dog</Text>
      <br />
      <Text level={6}>The quick brown fox jumps over the lazy dog</Text>
    </div>
  ))
  .add("Alignment", () => (
    <div>
      <Text block flush align="left">
        <Code>align="left"</Code>
      </Text>
      <Text block flush align="center">
        <Code>align="center"</Code>
      </Text>
      <Text block flush align="right">
        <Code>align="right"</Code>
      </Text>
    </div>
  ));
