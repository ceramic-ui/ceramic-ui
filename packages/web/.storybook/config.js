import React from "react";
import { addDecorator, configure } from "@storybook/react";
import styled, { ThemeProvider } from "styled-components";
import { withKnobs, select } from "@storybook/addon-knobs";

import reset from "../src/reset";
import themes from "../src/themes";
import SystemFontStack from "../src/SystemFontStack";

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

reset();

const Stage = styled.div`padding: ${props => props.theme.spacingBase()};`;
Stage.displayName = "Stage";

addDecorator(story => {
  const selectedTheme = select("Theme", Object.keys(themes), "default");
  return (
    <ThemeProvider theme={themes[selectedTheme]}>
      <Stage>
        <SystemFontStack>{story()}</SystemFontStack>
      </Stage>
    </ThemeProvider>
  );
});
addDecorator(withKnobs);

configure(loadStories, module);
