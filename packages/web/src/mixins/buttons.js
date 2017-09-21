import PropTypes from "prop-types";
import { css } from "styled-components";

import { darken, resolveColor } from "../colors";

export const brandMixin = css`
  ${props => {
    const color = resolveColor(props, "appearance");
    return `
      border: ${props.theme.borderWidth()} solid ${color};
      box-shadow: 0 2px 4px 0 ${props.theme.dropShadow}};
      background-color: ${color};
      &,
      &:visited {
        color: ${props.theme.brandLight};
      }
      &:hover,
      &:focus {
        background-color: ${darken(color, 5)};
        border-color: ${darken(color, 5)};
      }
      `;
  }};

  &:active {
    box-shadow: none;
  }
`;

export const defaultMixin = css`
  border: ${props =>
    `${props.theme.borderWidth()} solid ${props.theme.brandPrimary}`};
  box-shadow: 0 2px 4px 0 ${props => props.theme.dropShadow}};
  background-color: ${props => props.theme.brandLight};
  &,
  &:visited {
    color: ${props => props.theme.brandPrimary};
  }
  &:hover,
  &:focus {
    background-color: ${props => darken(props.theme.brandLight, 5)};
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
    background-color: ${props => darken(props.theme.brandLight, 5)};
  }
`;

export const lightMixin = css`
  border: ${props => props.theme.borderWidth()} solid transparent;
  background-color: transparent;
  &,
  &:visited {
    color: ${props => props.theme.brandLight};
  }
  &:hover,
  &:focus {
    background-color: ${props => darken(props.theme.brandLight, 5)};
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
  primary: brandMixin,
  secondary: brandMixin,
  success: brandMixin,
  danger: brandMixin,
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
    color: ${props => props.theme.brandDark};
    text-decoration: none;
    font-weight: 400;
    cursor: not-allowed;
  }
`;

export const buttonPropTypes = {
  appearance: PropTypes.oneOf(Object.keys(appearances))
};
