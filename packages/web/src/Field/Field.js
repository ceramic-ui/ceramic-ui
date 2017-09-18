import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

const Field = styled.div`
  ${props => spacingMixin};
  ${props => !!props.valid && `color: ${props.theme.brandSuccess}`};
  ${props => !!props.invalid && `color: ${props.theme.brandDanger}`};
  > * {
    margin-bottom: ${props => props.theme.spacingSmallest()};
  }
  > :last-child {
    margin-bottom: 0;
  }
`;
Field.displayName = "Field";
Field.propTypes = {
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  ...spacingPropTypes
};

export default Field;
