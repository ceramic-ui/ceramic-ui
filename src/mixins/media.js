import { css } from "styled-components";

export const sizes = {
  small: 576,
  medium: 768,
  large: 992,
  xlarge: 1200
};

export const minWidth = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const maxWidth = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] - 1}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
