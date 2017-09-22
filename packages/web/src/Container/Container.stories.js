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
      <Container
        maxWidths={[
          { media: "small", value: 400 },
          { media: "medium", value: 500 },
          { media: "large", value: 800 }
        ]}
      >
        This container has custom max widths for different screen size. Try
        resizing the browser window!
      </Container>
    </div>
  ))
);
