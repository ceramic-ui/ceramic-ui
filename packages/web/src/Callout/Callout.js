import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

const calloutMixin = colourName => css`
  border-color: ${props => props.theme[colourName]};
  box-shadow: inset 6px 0 0 -3px ${props => props.theme[colourName]},
    0px 2px 4px 0 ${props => props.theme.dropShadow};
`;

const appearances = {
  primary: calloutMixin("brandPrimary"),
  danger: calloutMixin("brandDanger"),
  success: calloutMixin("brandSuccess")
};

const Callout = styled.div`
  ${spacingMixin};
  padding: ${props => props.theme.spacingBase()};
  box-sizing: border-box;
  border: ${props =>
    `${props.theme.borderWidth()} solid ${props.theme.borderColor}`};
  border-radius: ${props => props.theme.borderRadius()};
  background-color: ${props => props.theme.white};

  ${props => appearances[props.appearance]};
`;
Callout.displayName = "Callout";
Callout.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(appearances)).isRequired,
  ...spacingPropTypes
};

export default Callout;
