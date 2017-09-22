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
      <Container>
        <Input />
      </Container>
    ))
  )
  .add(
    "Inline",
    withInfo()(() => (
      <SpacedContainer>
        <Input inline />
        <Input inline />
      </SpacedContainer>
    ))
  )
  .add("Disabled", () => (
    <div>
      <Container>
        <Input disabled value="cannot edit me!" />
      </Container>
      <SpacedContainer>
        <Input inline disabled />
        <Input inline disabled />
      </SpacedContainer>
    </div>
  ))
  .add("Validation", () => (
    <div>
      <Container>
        <Input valid defaultValue="I am valid" />
      </Container>
      <Container>
        <Input invalid defaultValue="I am invalid" />
      </Container>
      <Container>
        <Input
          disabled
          invalid
          defaultValue="I am disabled. Validation not shown."
        />
      </Container>
    </div>
  ));
