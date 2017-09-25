import PropTypes from "prop-types";
import { css } from "styled-components";

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

export const textMixin = css`
  ${props => {
    const fontSize = fontSizeFromLevel(props);
    return `
    ${!!props.align && `text-align: ${props.align}`};
    ${!!props.color && `color: ${resolveColor(props, "color")}`};
    ${!!props.weight && `font-weight: ${weights[props.weight]}`};
    ${!!fontSize && `font-size: ${fontSize()}`};
    `;
  }};
`;

export const textPropTypes = {
  align: PropTypes.string,
  level: PropTypes.number,
  color: PropTypes.string,
  weight: PropTypes.oneOf(Object.keys(weights))
};
