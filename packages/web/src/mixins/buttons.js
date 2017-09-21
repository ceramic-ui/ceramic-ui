import PropTypes from "prop-types";
import { css } from "styled-components";

import { darken } from "../colors";

export const brandMixin = colorName => css`
  border: ${props =>
    `${props.theme.borderWidth()} solid ${props.theme[colorName]}`};
  box-shadow: 0 2px 4px 0 ${props => props.theme.dropShadow}};
  background-color: ${props => props.theme[colorName]};
  &,
  &:visited {
    color: ${props => props.theme.white};
  }
  &:hover,
  &:focus {
    background-color: ${props => darken(props.theme[colorName], 5)};
    border-color: ${props => darken(props.theme[colorName], 5)};
  }
  &:active {
    box-shadow: none;
  }
`;

export const defaultMixin = css`
  border: ${props =>
    `${props.theme.borderWidth()} solid ${props.theme.brandPrimary}`};
  box-shadow: 0 2px 4px 0 ${props => props.theme.dropShadow}};
  background-color: ${props => props.theme.white};
  &,
  &:visited {
    color: ${props => props.theme.brandPrimary};
  }
  &:hover,
  &:focus {
    background-color: ${props => darken(props.theme.white, 5)};
    border-color: ${props => darken(props.theme.brandPrimary, 5)};
  }
  &:active {
    box-shadow: none;
  }
`;

export const darkMixin = css`
  border: ${props => props.theme.borderWidth()} solid transparent;
  background-color: transparent;
  &,
  &:visited {
    color: ${props => props.theme.textColor};
  }
  &:hover,
  &:focus {
    background-color: ${props => darken(props.theme.white, 5)};
  }
`;

export const lightMixin = css`
  border: ${props => props.theme.borderWidth()} solid transparent;
  background-color: transparent;
  &,
  &:visited {
    color: ${props => props.theme.white};
  }
  &:hover,
  &:focus {
    background-color: ${props => darken(props.theme.white, 5)};
  }
`;

export const linkMixin = css`
  border: 1px solid transparent;
  background: none;
  &,
  &:visited {
    color: ${props => props.theme.linkColor};
  }
  text-transform: none;
  text-decoration: underline;
  font-weight: 400;
`;

export const appearances = {
  default: defaultMixin,
  primary: brandMixin("brandPrimary"),
  secondary: brandMixin("brandSecondary"),
  success: brandMixin("brandSuccess"),
  danger: brandMixin("brandDanger"),
  dark: darkMixin,
  light: lightMixin,
  link: linkMixin
};

export const buttonMixin = css`
  padding: ${props => props.theme.spacingSmallest()};
  border-radius: ${props => props.theme.borderRadius()};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  line-height: inherit;
  &:focus {
    outline: 2px solid ${props => props.theme.focusColor};
    outline-offset: 2px;
  }
  ${props => appearances[props.appearance || "default"]};
  &:disabled {
    background-color: ${props => props.theme.brandDisabled};
    border-color: ${props => props.theme.brandDisabled};
    box-shadow: none;
    color: ${props => props.theme.black};
    text-decoration: none;
    font-weight: 400;
    cursor: not-allowed;
  }
`;

export const buttonPropTypes = {
  appearance: PropTypes.oneOf(Object.keys(appearances))
};
