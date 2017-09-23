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
      background-color: ${resolveColor(props, "background") || defaultColor};
    `;
  }};
`;
Box.displayName = "Box";
Box.propTypes = {
  gutterX: PropTypes.string,
  gutterY: PropTypes.string,
  background: PropTypes.string.isRequired,
  ...spacingPropTypes
};
Box.defaultProps = {
  background: defaultColor
};

export default Box;
