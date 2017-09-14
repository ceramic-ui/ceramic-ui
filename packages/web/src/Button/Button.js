import React from "react";
import styled from "styled-components";

import { appearances, buttonMixin, buttonPropTypes } from "../mixins/buttons";
import { blockMixin, blockPropTypes } from "../mixins/spacing";

const Button = styled.button`
  ${props => buttonMixin};
  ${props => blockMixin};
`;
Button.displayName = "Button";
Button.propTypes = { ...buttonPropTypes, ...blockPropTypes };
Button.defaultProps = {
  appearance: "default",
  type: "button"
};

export default Button;
