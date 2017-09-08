import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Error = styled.p`
  margin: 0;
  color: ${props => props.theme.brandDanger};
`;
Error.displayName = "Error";
Error.propTypes = {};

export default Error;
