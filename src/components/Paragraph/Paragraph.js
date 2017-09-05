import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { zero, identity } from "../../utils";
import { vrythm, vrythmPropTypes } from "../../mixins/spacing";

const Paragraph = styled.p`${props => vrythm};`;
Paragraph.displayName = "Paragraph";
Paragraph.propTypes = {
  ...vrythmPropTypes
};

export default Paragraph;
