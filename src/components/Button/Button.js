import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { lighten, darken } from "../../colors";
import { vrythm, vrythmPropTypes } from "../../mixins/spacing";

const appearanceMixin = colorName => css`
  border: 1px solid ${props => props.theme[colorName]};
  box-shadow: 0 2px 4px 0 ${props => lighten(props.theme.black, 70)};
  background-color: ${props => props.theme[colorName]};
  color: ${props => props.theme.white};
  &:hover {
    background-color: ${props => darken(props.theme[colorName], 5)};
  }
  &:focus {
    background-color: ${props => darken(props.theme[colorName], 5)};
  }
  &:active {
    box-shadow: none;
  }
`;

const defaultMixin = css`
  border: 1px solid ${props => props.theme.brandPrimary};
  box-shadow: 0px 2px 4px 0 ${props => lighten(props.theme.black, 70)},
    inset 0 0 0 1px ${props => props.theme.brandPrimary};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.brandPrimary};
  &:hover {
    background-color: ${props => darken(props.theme.white, 5)};
  }
  &:focus {
    background-color: ${props => darken(props.theme.white, 5)};
  }
  &:active {
    box-shadow: inset 0 0 0 3px ${props => props.theme.brandPrimary};
  }
`;

const linkMixin = css`
  border: 1px solid transparent;
  background: none;
  color: ${props => props.theme.linkColor};
  text-decoration: underline;
  font-weight: 400;
`;

const buttons = {
  default: defaultMixin,
  primary: appearanceMixin("brandPrimary"),
  secondary: appearanceMixin("brandSecondary"),
  success: appearanceMixin("brandSuccess"),
  danger: appearanceMixin("brandDanger"),
  link: linkMixin
};

const Button = styled.button`
  ${props => props.block && "width: 100%"};
  display: ${props => (props.block ? "block" : "inline-block")};
  padding: ${props => props.theme.paddingY()} ${props => props.theme.paddingX()};
  ${props => props.block && vrythm};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  &:focus {
    outline: 2px solid ${props => props.theme.focusColor};
    outline-offset: 2px;
  }
  ${props => buttons[props.appearance]};
  &:disabled {
    background-color: ${props => props.theme.brandMuted};
    border-color: ${props => props.theme.brandMuted};
    box-shadow: none;
    color: ${props => props.theme.black};
    text-decoration: none;
    font-weight: 400;
    cursor: not-allowed;
  }
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
  ]).isRequired,
  ...vrythmPropTypes
};
Button.defaultProps = {
  appearance: "default",
  type: "button"
};

export default Button;
