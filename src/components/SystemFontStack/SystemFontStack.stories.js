import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import SystemFontStack from "./SystemFontStack";

storiesOf("SystemFontStack", module).add(
  "Basic",
  withInfo(
    "This component applies the system font stack as a font-family that cascades to its children"
  )(() => (
    <SystemFontStack>
      This text should be rendered using your system font
    </SystemFontStack>
  ))
);
