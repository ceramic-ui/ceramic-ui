import React from "react";
import { storiesOf } from "@storybook/react";

import Pre from "./Pre";

storiesOf("Pre", module).add("Basic", () => (
  <Pre>
    {`package main

import "fmt"

func main() {
\tfmt.Println("Hello world")
}`}
  </Pre>
));
