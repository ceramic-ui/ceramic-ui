import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import ButtonPanel from "../ButtonPanel";
import Button from "./Button";

storiesOf("Button", module)
  .add(
    "Basic",
    withInfo()(() => {
      return (
        <ButtonPanel>
          <Button>Default</Button>
          <Button appearance="primary">Primary</Button>
          <Button appearance="secondary">Secondary</Button>
          <Button appearance="success">Success</Button>
          <Button appearance="danger">Danger</Button>
          <Button appearance="light">Light</Button>
          <Button appearance="dark">Dark</Button>
          <Button appearance="link">Link</Button>
        </ButtonPanel>
      );
    })
  )
  .add("Block-level", () => {
    return (
      <ButtonPanel justify="none">
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
        <Button block appearance="light">
          Light
        </Button>
        <Button block appearance="dark">
          Dark
        </Button>
        <Button block appearance="link">
          Link
        </Button>
      </ButtonPanel>
    );
  })
  .add("Disabled", () => {
    return (
      <ButtonPanel>
        <Button disabled>Default</Button>
        <Button disabled appearance="primary">
          Primary
        </Button>
        <Button disabled appearance="secondary">
          Secondary
        </Button>
        <Button disabled appearance="success">
          Success
        </Button>
        <Button disabled appearance="danger">
          Danger
        </Button>
        <Button disabled appearance="light">
          Light
        </Button>
        <Button disabled appearance="dark">
          Dark
        </Button>
        <Button disabled appearance="link" onClick={() => alert("hi")}>
          Link
        </Button>
      </ButtonPanel>
    );
  });
