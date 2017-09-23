import PropTypes from "prop-types";
import styled from "styled-components";

import {
  spacingMixin,
  spacingPropTypes,
  resolveSpacing
} from "../mixins/spacing";
import { resolveColor } from "../colors";

const defaultColor = "transparent";

const Box = styled.div`
  ${spacingMixin};

  box-sizing: border-box;

  ${props => {
    const gutterX = resolveSpacing(props, "gutterX");
    const gutterY = resolveSpacing(props, "gutterY");
    return `
      ${!!gutterX &&
        `
        padding-left: ${gutterX()};
        padding-right: ${gutterX()};
        `};
      ${!!gutterY &&
        `
        padding-top: ${gutterY()};
        padding-bottom: ${gutterY()};
        `};
      ${!props.noBorder &&
        `border: ${props.theme.borderWidth()} solid ${props.theme
          .borderColor}`};
      background-color: ${resolveColor(props, "background") || defaultColor};
      border-radius: ${props.theme.borderRadius()};
    `;
  }};
`;
Box.displayName = "Box";
Box.propTypes = {
  gutterX: PropTypes.string.isRequired,
  gutterY: PropTypes.string.isRequired,
  noBorder: PropTypes.bool,
  background: PropTypes.string.isRequired,
  ...spacingPropTypes
};
Box.defaultProps = {
  gutterX: "base",
  gutterY: "base",
  background: defaultColor
};

export default Box;
