import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Flex from "../Flex";
import Link from "./Link";

storiesOf("Link", module)
  .add(
    "Basic",
    withInfo()(() => {
      return (
        <Flex alignItems="center">
          <Flex.Item>
            <Link href="#">No appearance</Link>
          </Flex.Item>
          <Flex.Item>
            <Link href="#" appearance="default">
              Default
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Link href="#" appearance="primary">
              Primary
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Link href="#" appearance="secondary">
              Secondary
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Link href="#" appearance="success">
              Success
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Link href="#" appearance="danger">
              Danger
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Link href="#" appearance="light">
              Light
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Link href="#" appearance="dark">
              Dark
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Link href="#" appearance="link">
              Link
            </Link>
          </Flex.Item>
        </Flex>
      );
    })
  )
  .add("Block-level", () => {
    return (
      <Flex direction="column">
        <Flex.Item>
          <Link href="#" block>
            No appearance
          </Link>
        </Flex.Item>
        <Flex.Item>
          <Link href="#" block appearance="default">
            Default
          </Link>
        </Flex.Item>
        <Flex.Item>
          <Link href="#" block appearance="primary">
            Primary
          </Link>
        </Flex.Item>
        <Flex.Item>
          <Link href="#" block appearance="secondary">
            Secondary
          </Link>
        </Flex.Item>
        <Flex.Item>
          <Link href="#" block appearance="success">
            Success
          </Link>
        </Flex.Item>
        <Flex.Item>
          <Link href="#" block appearance="danger">
            Danger
          </Link>
        </Flex.Item>
        <Flex.Item>
          <Link href="#" block appearance="light">
            Light
          </Link>
        </Flex.Item>
        <Flex.Item>
          <Link href="#" block appearance="dark">
            Dark
          </Link>
        </Flex.Item>
        <Flex.Item>
          <Link href="#" block appearance="link">
            Link
          </Link>
        </Flex.Item>
      </Flex>
    );
  });
