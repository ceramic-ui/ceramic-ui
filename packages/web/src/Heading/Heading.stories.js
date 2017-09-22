import React from "react";
import { storiesOf } from "@storybook/react";

import Heading from "./Heading";

storiesOf("Heading", module).add("Basic", () => (
  <div>
    <Heading level={1}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading level={2}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading level={3}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading level={4}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading level={5}>The quick brown fox jumps over the lazy dog</Heading>
    <Heading level={6}>The quick brown fox jumps over the lazy dog</Heading>
  </div>
));
