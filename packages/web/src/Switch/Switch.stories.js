import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Box from "../Box";
import Container from "../Container";
import Field from "../Field";
import P from "../Paragraph";
import Switch from "./Switch";

storiesOf("Switch", module).add(
  "Basic",
  withInfo()(() => (
    <Container>
      <Box>
        <P>As a checkbox</P>
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
      <Box>
        <P>As a radio</P>
        <Container>
          <Switch id="example4" name="radio1" type="radio">
            This can be selected
          </Switch>
        </Container>
        <Container>
          <Switch id="example5" name="radio1" type="radio">
            So can this one
          </Switch>
        </Container>
        <Container>
          <Switch id="example6" name="radio1" type="radio" disabled>
            But this one is disabled
          </Switch>
        </Container>
      </Box>
    </Container>
  ))
);
