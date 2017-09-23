import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";

import ProgressBar from "./ProgressBar";

storiesOf("ProgressBar", module).add("Basic", () => {
  const value = number("Value", 42);
  return (
    <div>
      <ProgressBar value={value} />
      <ProgressBar appearance="secondary" value={value} />
      <ProgressBar appearance="danger" value={value} />
      <ProgressBar appearance="success" value={value} />
      <ProgressBar appearance="dark" value={value} />
    </div>
  );
});
