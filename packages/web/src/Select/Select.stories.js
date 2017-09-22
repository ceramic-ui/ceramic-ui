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
      <Container>
        <Select>
          <Option value="">Select your favourite super hero</Option>
          <Option value="wonder-woman">Wonder woman</Option>
          <Option value="batman">Batman</Option>
          <Option value="superman">Superman</Option>
          <Option value="iron-man">Iron man</Option>
        </Select>
      </Container>
    ))
  )
  .add(
    "Inline",
    withInfo()(() => (
      <SpacedContainer>
        <Select inline>
          <Option value="">Select your favourite super hero</Option>
          <Option value="wonder-woman">Wonder woman</Option>
          <Option value="batman">Batman</Option>
          <Option value="superman">Superman</Option>
          <Option value="iron-man">Iron man</Option>
        </Select>
        <Select inline>
          <Option value="">Select your favourite food</Option>
          <Option value="pizza">Pizza</Option>
          <Option value="pasta">Pasta</Option>
          <Option value="salad">Salad</Option>
          <Option value="steak">Steak</Option>
        </Select>
      </SpacedContainer>
    ))
  )
  .add("Disabled", () => (
    <div>
      <Container>
        <Select disabled>
          <Option value="">You can't open me!</Option>
          <Option value="wonder-woman">Wonder woman</Option>
          <Option value="batman">Batman</Option>
          <Option value="superman">Superman</Option>
          <Option value="iron-man">Iron man</Option>
        </Select>
      </Container>
      <SpacedContainer>
        <Select inline disabled>
          <Option value="">Select your favourite super hero</Option>
          <Option value="wonder-woman">Wonder woman</Option>
          <Option value="batman">Batman</Option>
          <Option value="superman">Superman</Option>
          <Option value="iron-man">Iron man</Option>
        </Select>
        <Select inline disabled>
          <Option value="">Select your favourite food</Option>
          <Option value="pizza">Pizza</Option>
          <Option value="pasta">Pasta</Option>
          <Option value="salad">Salad</Option>
          <Option value="steak">Steak</Option>
        </Select>
      </SpacedContainer>
    </div>
  ))
  .add("Validation", () => (
    <div>
      <Container>
        <Select valid>
          <Option value="">Select your favourite super hero</Option>
          <Option value="wonder-woman">Wonder woman</Option>
          <Option value="batman">Batman</Option>
          <Option value="superman">Superman</Option>
          <Option value="iron-man">Iron man</Option>
        </Select>
      </Container>
      <Container>
        <Select invalid>
          <Option value="">Select your favourite super hero</Option>
          <Option value="wonder-woman">Wonder woman</Option>
          <Option value="batman">Batman</Option>
          <Option value="superman">Superman</Option>
          <Option value="iron-man">Iron man</Option>
        </Select>
      </Container>
    </div>
  ));
