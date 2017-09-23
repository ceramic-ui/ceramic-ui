import PropTypes from "prop-types";
import styled from "styled-components";

import { resolveColor } from "../colors";

const weights = {
  lighter: "300",
  normal: "normal",
  bold: "bold"
};

const fontSizeFromLevel = ({ level, theme }) => {
  if (!level) {
    return;
  }
  const clean = Number(level);
  if (isNaN(clean) || clean < 1 || clean > 6) {
    return;
  }
  return theme[`fontSize${clean}`];
};

const Text = styled.span`
  ${props => {
    const fontSize = fontSizeFromLevel(props);
    return `
    ${!!props.color && `color: ${resolveColor(props, "color")}`};
    ${!!props.weight && `font-weight: ${weights[props.weight]}`};
    ${!!fontSize && `font-size: ${fontSize()}`};
    `;
  }};
`;

Text.displayName = "Text";
Text.propTypes = {
  level: PropTypes.number,
  color: PropTypes.string,
  weight: PropTypes.oneOf(Object.keys(weights))
};

export default Text;
