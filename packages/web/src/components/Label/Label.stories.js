import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Label from "./Label";

storiesOf("Label", module).add(
  "Basic",
  withInfo()(() => <Label>Basic example</Label>)
);
