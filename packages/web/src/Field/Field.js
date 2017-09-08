import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { vrythm, vrythmPropTypes } from "../mixins/spacing";

const Field = styled.div`
  ${props => vrythm};
  ${props => !!props.valid && `color: ${props.theme.brandSuccess}`};
  ${props => !!props.invalid && `color: ${props.theme.brandDanger}`};
  > * {
    margin-bottom: ${props => props.theme.spacingBase(s => s / 2)};
  }
`;
Field.displayName = "Field";
Field.propTypes = {
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  ...vrythmPropTypes
};

export default Field;
