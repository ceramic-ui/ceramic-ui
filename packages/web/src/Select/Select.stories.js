import React from "react";
import { storiesOf } from "@storybook/react";

import Flex, { Item } from "../Flex";
import Select, { Option } from "./Select";

storiesOf("Select", module)
  .add("Basic", () => (
    <Select>
      <Option value="">Select your favourite super hero</Option>
      <Option value="wonder-woman">Wonder woman</Option>
      <Option value="batman">Batman</Option>
      <Option value="superman">Superman</Option>
      <Option value="iron-man">Iron man</Option>
    </Select>
  ))
  .add("Inline", () => (
    <div>
      <Flex wrap="wrap">
        <Item>
          <Select inline>
            <Option value="">Select your favourite super hero</Option>
            <Option value="wonder-woman">Wonder woman</Option>
            <Option value="batman">Batman</Option>
            <Option value="superman">Superman</Option>
            <Option value="iron-man">Iron man</Option>
          </Select>
        </Item>
        <Item>
          <Select inline>
            <Option value="">Select your favourite food</Option>
            <Option value="pizza">Pizza</Option>
            <Option value="pasta">Pasta</Option>
            <Option value="salad">Salad</Option>
            <Option value="steak">Steak</Option>
          </Select>
        </Item>
      </Flex>
    </div>
  ))
  .add("Disabled", () => (
    <Select disabled>
      <Option value="">You can't open me!</Option>
      <Option value="wonder-woman">Wonder woman</Option>
      <Option value="batman">Batman</Option>
      <Option value="superman">Superman</Option>
      <Option value="iron-man">Iron man</Option>
    </Select>
  ))
  .add("Validation", () => (
    <Flex>
      <Item>
        <Select valid>
          <Option value="">Select your favourite super hero</Option>
          <Option value="wonder-woman">Wonder woman</Option>
          <Option value="batman">Batman</Option>
          <Option value="superman">Superman</Option>
          <Option value="iron-man">Iron man</Option>
        </Select>
      </Item>
      <Item>
        <Select invalid>
          <Option value="">Select your favourite super hero</Option>
          <Option value="wonder-woman">Wonder woman</Option>
          <Option value="batman">Batman</Option>
          <Option value="superman">Superman</Option>
          <Option value="iron-man">Iron man</Option>
        </Select>
      </Item>
      <Item>
        <Select disabled invalid>
          <Option value="">Invalid but disabled so no color</Option>
          <Option value="wonder-woman">Wonder woman</Option>
          <Option value="batman">Batman</Option>
          <Option value="superman">Superman</Option>
          <Option value="iron-man">Iron man</Option>
        </Select>
      </Item>
    </Flex>
  ));
