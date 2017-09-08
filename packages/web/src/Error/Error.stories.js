import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Error from "./Error";

storiesOf("Error", module).add(
  "Basic",
  withInfo()(() => <Error>Basic example</Error>)
);
