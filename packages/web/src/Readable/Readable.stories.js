import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Readable from "./Readable";

storiesOf("Readable", module).add(
  "Basic",
  withInfo()(() => (
    <Readable>
      Readable has its width limited for readability on larger screens. On
      smaller screens, it reverts to take up 100% width. Try resizing your
      window to see the effect.
    </Readable>
  ))
);
