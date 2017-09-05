import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { darken } from "../../colors";

const appearanceMixin = colorName => css`
  border: 1px solid ${props => props.theme[colorName]};
  background-color: ${props => props.theme[colorName]};
  color: ${props => props.theme.white};
  &:hover {
    background-color: ${props => darken(props.theme[colorName], 5)};
  }
  &:focus {
    background-color: ${props => darken(props.theme[colorName], 5)};
  }
`;

const linkMixin = css`
  border: 1px solid transparent;
  background: none;
  color: ${props => props.theme.linkColor};
  text-decoration: underline;
  text-transform: none;
`;

const buttons = {
  default: appearanceMixin("brandDefault"),
  primary: appearanceMixin("brandPrimary"),
  secondary: appearanceMixin("brandSecondary"),
  success: appearanceMixin("brandSuccess"),
  danger: appearanceMixin("brandDanger"),
  link: linkMixin
};

const Button = styled.button`
  width: ${props => (props.block ? "100%" : "auto")};
  display: ${props => (props.block ? "block" : "inline-block")};
  padding: ${props => props.theme.paddingY()} ${props => props.theme.paddingX()};
  ${props => props.block && `margin-bottom: ${props.theme.spacingBase()}`};
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  &:focus {
    outline: 2px solid ${props => props.theme.focusColor};
    outline-offset: 2px;
  }
  ${props => buttons[props.appearance]};
`;
Button.displayName = "Button";
Button.propTypes = {
  block: PropTypes.bool,
  appearance: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "danger",
    "link"
  ]).isRequired
};
Button.defaultProps = {
  appearance: "default",
  type: "button"
};

export default Button;
