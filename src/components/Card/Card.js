import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { lighten } from "../../colors";
import { vrythm, vrythmPropTypes } from "../../mixins/spacing";

const calloutMixin = colourName => css`
  border-color: ${props => props.theme[colourName]};
  box-shadow: inset 6px 0 0 -3px ${props => props.theme[colourName]},
    0px 2px 4px 0 ${props => lighten(props.theme.black, 75)};
`;

const appearances = {
  "callout-primary": calloutMixin("brandPrimary"),
  "callout-danger": calloutMixin("brandDanger"),
  "callout-success": calloutMixin("brandSuccess")
};

const Card = styled.div`
  ${props => vrythm};
  padding: ${props => props.theme.paddingY()} ${props => props.theme.paddingX()};
  border: 2px solid ${props => props.theme.borderColor};

  ${props => appearances[props.appearance]};
`;
Card.displayName = "Card";
Card.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(appearances)),
  ...vrythmPropTypes
};

export default Card;
