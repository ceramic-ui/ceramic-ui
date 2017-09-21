import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Container from "../Container";
import H from "../Heading";
import P from "../Paragraph";
import Callout from "./Callout";

storiesOf("Callout", module).add(
  "Basic",
  withInfo("A is a styled container with various presentation options")(() => (
    <Container disableGutter>
      <Callout appearance="primary">
        <H level={2}>A callout - Primary style</H>
        <P>This is some example content</P>
        <P flush>
          It draws some attention to it relative to surrounding content
        </P>
      </Callout>
      <Callout appearance="danger">
        <H level={2}>A callout - Danger style</H>
        <P>This is some example content</P>
        <P flush>
          It draws some attention to it relative to surrounding content
        </P>
      </Callout>
      <Callout appearance="success">
        <H level={2}>A callout - Success style</H>
        <P>This is some example content</P>
        <P flush>
          It draws some attention to it relative to surrounding content
        </P>
      </Callout>
    </Container>
  ))
);
