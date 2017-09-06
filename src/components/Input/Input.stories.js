import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Container from "../Container";
import Input from "./Input";

const SpacedContainer = Container.extend`
  > * {
    margin-right: 8px;
  }
`;

storiesOf("Input", module)
  .add(
    "Basic",
    withInfo()(() => (
      <Container readable>
        <Input />
      </Container>
    ))
  )
  .add(
    "Inline",
    withInfo()(() => (
      <SpacedContainer readable>
        <Input inline />
        <Input inline />
      </SpacedContainer>
    ))
  )
  .add("Disabled", () => (
    <div>
      <Container readable>
        <Input disabled value="cannot edit me!" />
      </Container>
      <SpacedContainer readable>
        <Input inline disabled />
        <Input inline disabled />
      </SpacedContainer>
    </div>
  ));
