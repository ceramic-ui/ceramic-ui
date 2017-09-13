import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const defaultColor = "transparent";

const BackgroundColor = styled.div`
  background-color: ${props => props.theme[props.name] || defaultColor};
`;
BackgroundColor.displayName = "BackgroundColor";

BackgroundColor.defaultProps = {
  name: defaultColor
};
BackgroundColor.propTypes = {
  name: PropTypes.string.isRequired
};

export default BackgroundColor;
