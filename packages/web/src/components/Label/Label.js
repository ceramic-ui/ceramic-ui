import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: ${props => props.theme.fontSize()};
  color: ${props => props.theme.textColor};
`;
Label.displayName = "Label";
Label.propTypes = {};

export default Label;
