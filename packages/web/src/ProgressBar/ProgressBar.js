import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

export const appearances = {
  primary: "brandPrimary",
  secondary: "brandSecondary",
  danger: "brandDanger",
  success: "brandSuccess"
};

const percentage = ({ min, max, value }) =>
  Math.max(Math.min(value / (max - min) * 100, 100), 0);

const ProgressBar = styled.div.attrs({
  role: "progressbar",
  "aria-valuenow": ({ value }) => value,
  "aria-valuemin": ({ min }) => min,
  "aria-valuemax": ({ max }) => max
})`
  ${props => spacingMixin};
  width: 100%;
  height: ${props => props.theme.fontSize()};
  background-color: ${props => props.theme.borderColor};
  background-image: linear-gradient(
    to right,
    ${props => props.theme[appearances[props.appearance]]},
    ${props => props.theme[appearances[props.appearance]]}
  );
  background-size: ${props => percentage(props)}% 100%;
  background-repeat: no-repeat;
  transition: background 300ms ease-in-out;
`;
ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(appearances)).isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  ...spacingPropTypes
};
ProgressBar.defaultProps = {
  appearance: "primary",
  min: 0,
  max: 100
};
export default ProgressBar;
