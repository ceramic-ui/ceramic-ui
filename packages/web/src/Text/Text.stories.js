import React from "react";
import { storiesOf } from "@storybook/react";

import Text from "./Text";

storiesOf("Text", module)
  .add("Basic", () => (
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
        Example text using <code>weight="lighter"</code>
      </Text>
      <br />
      <Text weight="normal">
        Example text using <code>weight="normal"</code>
      </Text>
      <br />
      <Text weight="bold">
        Example text using <code>weight="bold"</code>
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
  ));
