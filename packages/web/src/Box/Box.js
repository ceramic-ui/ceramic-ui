import PropTypes from "prop-types";
import styled from "styled-components";

import {
  spacingMixin,
  spacingPropTypes,
  resolveSpacing
} from "../mixins/spacing";
import { textMixin, textPropTypes } from "../mixins/typography";
import { resolveColor } from "../colors";

const defaultColor = "transparent";

const Box = styled.div`
  ${spacingMixin};
  ${textMixin};

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
      background-color: ${resolveColor(props, "background") || defaultColor};
      ${!!props.border &&
        `
        border: ${props.theme.borderWidth()} solid ${props.theme.borderColor};
        border-radius: ${props.theme.borderRadius()};
        `};
    `;
  }};
`;
Box.displayName = "Box";
Box.propTypes = {
  gutterX: PropTypes.string,
  gutterY: PropTypes.string,
  background: PropTypes.string.isRequired,
  border: PropTypes.bool,
  ...textPropTypes,
  ...spacingPropTypes
};
Box.defaultProps = {
  background: defaultColor
};

export default Box;
