import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Form from "./Form";

storiesOf("Form", module).add(
  "Basic",
  withInfo()(() => <Form>Basic example</Form>)
);
