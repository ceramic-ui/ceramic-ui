import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import Button from "../Button";
import ButtonPanel, { justifyChoices } from "./ButtonPanel";

storiesOf("ButtonPanel", module).add("Basic", () => (
  <ButtonPanel
    justifyContent={select("Justify content", justifyChoices, "flex-start")}
  >
    <Button>Default</Button>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="success">Success</Button>
    <Button appearance="danger">Danger</Button>
    <Button appearance="link">Link</Button>
  </ButtonPanel>
));
