import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import H from "../Heading";
import P from "../Paragraph";
import Card from "./Card";

storiesOf("Card", module).add(
  "Basic",
  withInfo(
    "A Card is a styled container with various presentation options"
  )(() => (
    <Card>
      <H level={1}>A basic card</H>
      <P>This is some example content</P>
      <P flush>
        It is presented inside a card to draw some attention to it relative to
        surrounding content
      </P>
    </Card>
  ))
);
