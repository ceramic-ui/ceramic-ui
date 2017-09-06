import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Container from "../Container";
import Select, { Option } from "./Select";

const SpacedContainer = Container.extend`
  > * {
    margin-right: 8px;
  }
`;

storiesOf("Select", module)
  .add(
    "Basic",
    withInfo()(() => (
      <Container readable>
        <Select>
          <Option>Select your favourite super hero</Option>
          <Option>Wonder woman</Option>
          <Option>Batman</Option>
          <Option>Superman</Option>
          <Option>Iron man</Option>
        </Select>
      </Container>
    ))
  )
  .add(
    "Inline",
    withInfo()(() => (
      <SpacedContainer readable>
        <Select inline>
          <Option>Select your favourite super hero</Option>
          <Option>Wonder woman</Option>
          <Option>Batman</Option>
          <Option>Superman</Option>
          <Option>Iron man</Option>
        </Select>
        <Select inline>
          <Option>Select your favourite food</Option>
          <Option>Pizza</Option>
          <Option>Pasta</Option>
          <Option>Salad</Option>
          <Option>Steak</Option>
        </Select>
      </SpacedContainer>
    ))
  )
  .add("Disabled", () => (
    <div>
      <Container readable>
        <Select disabled>
          <Option>You can't open me!</Option>
          <Option>Wonder woman</Option>
          <Option>Batman</Option>
          <Option>Superman</Option>
          <Option>Iron man</Option>
        </Select>
      </Container>
      <SpacedContainer readable>
        <Select inline disabled>
          <Option>Select your favourite super hero</Option>
          <Option>Wonder woman</Option>
          <Option>Batman</Option>
          <Option>Superman</Option>
          <Option>Iron man</Option>
        </Select>
        <Select inline disabled>
          <Option>Select your favourite food</Option>
          <Option>Pizza</Option>
          <Option>Pasta</Option>
          <Option>Salad</Option>
          <Option>Steak</Option>
        </Select>
      </SpacedContainer>
    </div>
  ));
