import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import P from "../Paragraph";
import Card from "../Card";
import Container from "../Container";
import Switch from "./Switch";

storiesOf("Switch", module).add(
  "Basic",
  withInfo()(() => (
    <Container>
      <Card>
        <P>As a checkbox</P>
        <Container>
          <Switch id="example" name="check1" type="checkbox">
            This can be toggled
          </Switch>
        </Container>
        <Container>
          <Switch id="example2" name="check1" type="checkbox">
            So can this one
          </Switch>
        </Container>
        <Container>
          <Switch id="example3" name="check1" type="checkbox" disabled>
            But this one is disabled
          </Switch>
        </Container>
      </Card>
      <Card>
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
      </Card>
    </Container>
  ))
);
