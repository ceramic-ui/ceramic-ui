import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Container from "./Container";

storiesOf("Container", module).add(
  "Basic",
  withInfo(
    "A container groups content while respecting vertical rhythm"
  )(() => (
    <div>
      <Container>Hello Container 1</Container>
      <Container>Hello Container 2</Container>
      <Container readable>
        This container has its width limited for readability on tablet and
        larger screens. On mobile screens, it still takes up 100% width. Try
        resizing your window to see the effect.
      </Container>
    </div>
  ))
);
