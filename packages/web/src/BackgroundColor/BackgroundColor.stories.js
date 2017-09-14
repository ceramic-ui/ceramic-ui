import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { select } from "@storybook/addon-knobs";
import styled from "styled-components";

import H from "../Heading";
import P from "../Paragraph";
import BackgroundColor from "./BackgroundColor";

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
`;

storiesOf("BackgroundColor", module).add(
  "Basic",
  withInfo()(() => (
    <BackgroundColor
      name={select(
        "Color name",
        [
          "transparent",
          "brandPrimary",
          "brandSecondary",
          "brandSuccess",
          "brandDanger",
          "brandMuted",
          "brandDisabled",
          "white",
          "black"
        ],
        "brandPrimary"
      )}
    >
      <Hero>
        <H level={1}>Basic example</H>
        <P>Use knobs to change color</P>
      </Hero>
    </BackgroundColor>
  ))
);
