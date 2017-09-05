import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { zero, identity } from "../../utils";

const Paragraph = styled.p`
  margin: 0 0 ${props =>
      props.theme.spacingBase(props.flush ? zero : identity)};
`;
Paragraph.displayName = "Paragraph";
Paragraph.propTypes = {
  /** remove vertical spacing from the paragraph */
  flush: PropTypes.bool
};

export default Paragraph;
