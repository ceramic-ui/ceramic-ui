import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const colors = {
  primary: "brandPrimary",
  secondary: "brandSecondary",
  danger: "brandDanger",
  success: "brandSuccess",
  muted: "brandMuted"
};

const weights = {
  normal: "normal",
  bold: "bold"
};

const Text = styled.span`
  ${props => !!props.color && `color: ${props.theme[colors[props.color]]}`};
  ${props => !!props.weight && `font-weight: ${weights[props.weight]}`};
`;
Text.displayName = "Text";
Text.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors)),
  weight: PropTypes.oneOf(Object.keys(weights))
};

export default Text;
