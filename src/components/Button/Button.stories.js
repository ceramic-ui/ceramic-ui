import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Button from "./Button";

storiesOf("Button", module).add(
  "Basic",
  withInfo()(() => {
    return (
      <div>
        <Button>Default</Button>
        <Button appearance="primary">Primary</Button>
        <Button appearance="secondary">Secondary</Button>
        <Button appearance="success">Success</Button>
        <Button appearance="danger">Danger</Button>
      </div>
    );
  })
);
