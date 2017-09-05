import React from "react";
import { addDecorator, configure } from "@storybook/react";
import styled, { ThemeProvider } from "styled-components";

import reset from "../src/reset";
import defaultTheme from "../src/themes/default";
import SystemFontStack from "../src/components/SystemFontStack";

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

reset();

const Stage = styled.div`padding: ${props => props.theme.spacingBase()};`;
Stage.displayName = "Stage";

addDecorator(story => (
  <ThemeProvider theme={defaultTheme}>
    <Stage>
      <SystemFontStack>{story()}</SystemFontStack>
    </Stage>
  </ThemeProvider>
));

configure(loadStories, module);
