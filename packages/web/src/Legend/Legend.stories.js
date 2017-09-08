import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Legend from "./Legend";

storiesOf("Legend", module).add(
  "Basic",
  withInfo()(() => <Legend>Basic example</Legend>)
);
