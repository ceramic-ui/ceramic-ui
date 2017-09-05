import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Button from "./Button";

storiesOf("Button", module)
  .add(
    "Basic",
    withInfo()(() => {
      return (
        <div>
          <Button>Default</Button>
          <Button appearance="primary">Primary</Button>
          <Button appearance="secondary">Secondary</Button>
          <Button appearance="success">Success</Button>
          <Button appearance="danger">Danger</Button>
          <Button appearance="link">Link</Button>
        </div>
      );
    })
  )
  .add("Block-level", () => {
    return (
      <div>
        <Button block>Default</Button>
        <Button block appearance="primary">
          Primary
        </Button>
        <Button block appearance="secondary">
          Secondary
        </Button>
        <Button block appearance="success">
          Success
        </Button>
        <Button block appearance="danger">
          Danger
        </Button>
        <Button block appearance="link">
          Link
        </Button>
      </div>
    );
  });
