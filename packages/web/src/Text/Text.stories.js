import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Text from "./Text";

storiesOf("Text", module)
  .add(
    "Basic",
    withInfo()(() => (
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
  )
  .add("Weights", () => (
    <div>
      <Text weight="normal">Basic example</Text>
      <br />
      <Text weight="bold">Basic example</Text>
      <br />
      <br />
      <Text color="primary" weight="normal">
        Basic example (primary)
      </Text>
      <br />
      <Text color="primary" weight="bold">
        Basic example (primary)
      </Text>
      <br />
      <br />
      <Text color="secondary" weight="normal">
        Basic example (secondary)
      </Text>
      <br />
      <Text color="secondary" weight="bold">
        Basic example (secondary)
      </Text>
      <br />
      <br />
      <Text color="success" weight="normal">
        Basic example (success)
      </Text>
      <br />
      <Text color="success" weight="bold">
        Basic example (success)
      </Text>
      <br />
      <br />
      <Text color="danger" weight="normal">
        Basic example (danger)
      </Text>
      <br />
      <Text color="danger" weight="bold">
        Basic example (danger)
      </Text>
      <br />
      <br />
      <Text color="muted" weight="normal">
        Basic example (muted)
      </Text>
      <br />
      <Text color="muted" weight="bold">
        Basic example (muted)
      </Text>
    </div>
  ));
