import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { minWidth } from "../mixins/media";
import { vrythm, vrythmPropTypes } from "../mixins/spacing";

const Container = styled.div`
  ${props => vrythm};
  padding: 0 ${props => props.theme.spacingBase()};

  ${minWidth.medium`max-width: ${props =>
    props.readable ? props.theme.readableWidth() : "auto"}`};
`;
Container.displayName = "Container";
Container.propTypes = {
  readable: PropTypes.bool,
  ...vrythmPropTypes
};

export default Container;
