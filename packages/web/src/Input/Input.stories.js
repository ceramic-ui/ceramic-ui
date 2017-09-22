import React from "react";
import { storiesOf } from "@storybook/react";

import Flex, { Item } from "../Flex";
import Input from "./Input";

storiesOf("Input", module)
  .add("Basic", () => <Input />)
  .add("Inline", () => (
    <Flex>
      <Item>
        <Input inline />
      </Item>
      <Item>
        <Input inline />
      </Item>
    </Flex>
  ))
  .add("Disabled", () => <Input disabled value="cannot edit me!" />)
  .add("Validation", () => (
    <Flex direction="column">
      <Item>
        <Input valid defaultValue="I am valid" />
      </Item>
      <Item>
        <Input invalid defaultValue="I am invalid" />
      </Item>
      <Item>
        <Input
          disabled
          invalid
          defaultValue="I am disabled. Validation not shown."
        />
      </Item>
    </Flex>
  ));
