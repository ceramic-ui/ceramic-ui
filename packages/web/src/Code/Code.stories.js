import React from "react";
import { storiesOf } from "@storybook/react";

import Code from "./Code";

storiesOf("Code", module).add("Basic", () => (
  <div>
    This is an in-line <Code>code example</Code>
  </div>
));
