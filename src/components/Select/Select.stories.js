import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Select, { Option } from "./Select";

storiesOf("Select", module)
  .add(
    "Basic",
    withInfo()(() => (
      <Select>
        <Option>Select your favourite super hero</Option>
        <Option>Wonder woman</Option>
        <Option>Batman</Option>
        <Option>Superman</Option>
        <Option>Iron man</Option>
      </Select>
    ))
  )
  .add("Disabled", () => (
    <Select disabled>
      <Option>You can't open me!</Option>
      <Option>Wonder woman</Option>
      <Option>Batman</Option>
      <Option>Superman</Option>
      <Option>Iron man</Option>
    </Select>
  ));
