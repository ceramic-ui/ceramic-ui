import styled from "styled-components";

import { buttonMixin, buttonPropTypes } from "../mixins/buttons";
import { blockMixin, blockPropTypes } from "../mixins/spacing";

const Button = styled.button`
  ${buttonMixin};
  ${blockMixin};
`;
Button.displayName = "Button";
Button.propTypes = { ...buttonPropTypes, ...blockPropTypes };
Button.defaultProps = {
  appearance: "default",
  type: "button"
};

export default Button;
