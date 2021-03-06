import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "../Box";
import Code from "../Code";
import Field from "../Field";
import P from "../Paragraph";
import Switch from "./Switch";

storiesOf("Switch", module)
  .add("Checkboxes", () => (
    <Box gutterX="base" gutterY="base">
      <P>
        Switch can be used as checkboxes with <Code>type="checkbox"</Code>
      </P>
      <Field>
        <Switch id="example" name="check1" type="checkbox">
          This can be toggled
        </Switch>
      </Field>
      <Field>
        <Switch id="example2" name="check1" type="checkbox">
          So can this one
        </Switch>
      </Field>
      <Field flush>
        <Switch id="example3" name="check1" type="checkbox" disabled>
          But this one is disabled
        </Switch>
      </Field>
    </Box>
  ))
  .add("Radios", () => (
    <Box gutterX="base" gutterY="base">
      <P>
        Switch can be used as radios with <Code>type="radios"</Code>
      </P>
      <Field>
        <Switch id="example4" name="radio1" type="radio">
          This can be selected
        </Switch>
      </Field>
      <Field>
        <Switch id="example5" name="radio1" type="radio">
          So can this one
        </Switch>
      </Field>
      <Field>
        <Switch id="example6" name="radio1" type="radio" disabled>
          But this one is disabled
        </Switch>
      </Field>
    </Box>
  ));
