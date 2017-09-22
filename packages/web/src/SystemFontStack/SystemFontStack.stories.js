import React from "react";
import { storiesOf } from "@storybook/react";

import SystemFontStack from "./SystemFontStack";

storiesOf("SystemFontStack", module).add("Basic", () => (
  <SystemFontStack>
    This text should be rendered using your system font
  </SystemFontStack>
));
