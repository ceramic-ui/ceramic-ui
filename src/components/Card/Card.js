import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const calloutMixin = colourName => css`
  border-left-color: ${props => props.theme[colourName]};
  box-shadow: inset 6px 0 0 -3px ${props => props.theme[colourName]};
`;

const appearances = {
  "callout-primary": calloutMixin("brandPrimary"),
  "callout-danger": calloutMixin("brandDanger"),
  "callout-success": calloutMixin("brandSuccess")
};

const Card = styled.div`
  margin: 0 0 ${props => props.theme.spacingBase()};
  padding: ${props => props.theme.paddingY()} ${props => props.theme.paddingX()};
  border: 1px solid ${props => props.theme.borderColor};

  ${props => appearances[props.appearance]};
`;
Card.displayName = "Card";
Card.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(appearances))
};

export default Card;
