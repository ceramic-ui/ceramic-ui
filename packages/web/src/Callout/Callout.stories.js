import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import H from "../Heading";
import P from "../Paragraph";
import Callout from "./Callout";

storiesOf("Callout", module).add(
  "Basic",
  withInfo("A is a styled container with various presentation options")(() => (
    <div>
      <Callout appearance="primary">
        <H level={2}>Callout - Primary style</H>
        <P>This is some example content</P>
        <P flush>
          It draws some attention to it relative to surrounding content
        </P>
      </Callout>
      <Callout appearance="secondary">
        <H level={2}>Callout - Primary style</H>
        <P>This is some example content</P>
        <P flush>
          It draws some attention to it relative to surrounding content
        </P>
      </Callout>
      <Callout appearance="danger">
        <H level={2}>Callout - Danger style</H>
        <P>This is some example content</P>
        <P flush>
          It draws some attention to it relative to surrounding content
        </P>
      </Callout>
      <Callout appearance="success">
        <H level={2}>Callout - Success style</H>
        <P>This is some example content</P>
        <P flush>
          It draws some attention to it relative to surrounding content
        </P>
      </Callout>
      <Callout appearance="dark">
        <H level={2}>Callout - Dark style</H>
        <P>This is some example content</P>
        <P flush>
          It draws some attention to it relative to surrounding content
        </P>
      </Callout>
    </div>
  ))
);
