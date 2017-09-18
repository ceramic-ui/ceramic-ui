import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { zero, identity } from "../utils";
import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

const Paragraph = styled.p`${props => spacingMixin};`;
Paragraph.displayName = "Paragraph";
Paragraph.propTypes = {
  ...spacingPropTypes
};

export default Paragraph;
