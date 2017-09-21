import PropTypes from "prop-types";
import styled from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

const defaultColor = "transparent";

const Box = styled.div`
  ${spacingMixin};

  box-sizing: border-box;

  ${props => `
    ${!props.disableGutter && `padding: ${props.theme.spacingBase()}`};
    ${!props.disableBorder &&
      `border: ${props.theme.borderWidth()} solid ${props.theme.borderColor}`};
      background-color: ${props.theme[props.background] || defaultColor};
      border-radius: ${props.theme.borderRadius()};
    `};
`;
Box.displayName = "Box";
Box.propTypes = {
  disableGutter: PropTypes.bool,
  disableBorder: PropTypes.bool,
  background: PropTypes.string.isRequired,
  ...spacingPropTypes
};
Box.defaultProps = {
  background: defaultColor
};

export default Box;
