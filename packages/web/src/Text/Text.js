import PropTypes from "prop-types";
import styled from "styled-components";

import { resolveColor } from "../colors";

const weights = {
  normal: "normal",
  bold: "bold"
};

const Text = styled.span`
  ${props => !!props.color && `color: ${resolveColor(props, "color")}`};
  ${props => !!props.weight && `font-weight: ${weights[props.weight]}`};
`;
Text.displayName = "Text";
Text.propTypes = {
  color: PropTypes.string,
  weight: PropTypes.oneOf(Object.keys(weights))
};

export default Text;
