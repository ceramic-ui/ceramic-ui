import React from "react";
import styled from "styled-components";

import Label from "../Label";
import { Heading4 } from "../Heading";

// Wrapping <legend> with a <div> stops the default positioning of <legend>s
// over the border of <fieldset>s
const WrappedLegend = props => (
  <div>
    <legend {...props} />
  </div>
);

const Legend = Heading4.withComponent(WrappedLegend).extend`
  display: flex;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  appearance: none;
`;
Legend.displayName = "Legend";

export default Legend;
