import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Link from "./Link";

storiesOf("Link", module).add(
  "Basic",
  withInfo()(() => <Link>Simple link</Link>)
);
