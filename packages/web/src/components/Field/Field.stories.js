import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Container from "../Container";
import Error from "../Error";
import Input from "../Input";
import Label from "../Label";
import Text from "../Text";
import Field from "./Field";

storiesOf("Field", module).add(
  "Basic",
  withInfo()(() => (
    <Container readable>
      <Field invalid>
        <div>
          <Label>Street</Label>
          <Text color="muted">Must be a U.S. address</Text>
        </div>
        <Input defaultValue="742 Evergreen Terrace" />
        <Input defaultValue="" />
        <Error>This is not a valid address</Error>
      </Field>
      <Field valid>
        <Label>Town or suburb</Label>
        <Input defaultValue="Springfield" />
      </Field>
    </Container>
  ))
);
