import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import media from "../../media";

const Container = styled.div`
  margin: 0 0 ${props => props.theme.spacingBase()};
  padding: 0 ${props => props.theme.paddingX()};

  ${media.medium`max-width: ${props =>
    props.readable ? props.theme.readableWidth() : "auto"}`};
`;
Container.displayName = "Container";
Container.propTypes = {
  readable: PropTypes.bool
};

export default Container;
