import React from "react";
import { storiesOf } from "@storybook/react";

import P from "./Paragraph";

storiesOf("Paragraph", module).add("Basic", () => (
  <div>
    <P>This is sample text in a paragraph</P>
    <P flush>This is a flush paragraph that has no margin</P>
    <P>This is another paragraph</P>
  </div>
));
