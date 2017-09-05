import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { darken } from "../../colors";

const bg = {
  default: props => props.theme.brandDefault,
  primary: props => props.theme.brandPrimary,
  secondary: props => props.theme.brandSecondary,
  success: props => props.theme.brandSuccess,
  danger: props => props.theme.brandDanger
};

const hoverBg = Object.keys(bg).reduce((acc, k) => {
  const color = bg[k];
  const hover = props => darken(color(props), 5);
  return { ...acc, [k]: hover };
}, {});

const borderColors = hoverBg;

const Button = styled.button`
  padding: ${props => props.theme.paddingY()} ${props => props.theme.paddingX()};
  border: 1px solid ${props => borderColors[props.appearance](props)};
  background-color: ${props => bg[props.appearance](props)};
  color: ${props => props.theme.white};
  font-size: 1rem;

  &:hover {
    background-color: ${props => hoverBg[props.appearance](props)};
  }
  &:focus {
    background-color: ${props => hoverBg[props.appearance](props)};
    outline: 2px solid ${props => props.theme.focusColor};
    outline-offset: 2px;
  }
`;
Button.displayName = "Button";
Button.propTypes = {
  appearance: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "danger"
  ]).isRequired
};
Button.defaultProps = {
  appearance: "default",
  type: "button"
};

export default Button;
