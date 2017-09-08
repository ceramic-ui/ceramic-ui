import React from "react";
import initStoryshots from "@storybook/addon-storyshots";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import reset from "./reset";
import defaultTheme from "./themes/default";
import SystemFontStack from "./components/SystemFontStack";

reset();

addDecorator(story => (
  <ThemeProvider theme={defaultTheme}>
    <SystemFontStack>{story()}</SystemFontStack>
  </ThemeProvider>
));

initStoryshots();
