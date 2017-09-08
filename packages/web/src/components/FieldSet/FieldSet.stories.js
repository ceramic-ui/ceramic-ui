import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import FieldSet from "./FieldSet";

storiesOf("FieldSet", module).add(
  "Basic",
  withInfo()(() => <FieldSet>Basic example</FieldSet>)
);
