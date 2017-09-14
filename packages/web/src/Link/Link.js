import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { appearances, buttonMixin, buttonPropTypes } from "../mixins/buttons";
import { blockMixin, blockPropTypes } from "../mixins/spacing";

const linkMixin = css`
  box-sizing: border-box;
  text-align: center;
  &,
  &:hover,
  &:focus {
    color: ${props => props.theme.linkColor};
  }
  &:visited {
    color: ${props => props.theme.linkVisitedColor};
  }
`;

const Link = styled.a`
  ${props => (props.appearance ? buttonMixin : linkMixin)};
  ${props => blockMixin};
`;
Link.displayName = "Link";
Link.propTypes = {
  href: PropTypes.string.isRequired,
  ...buttonPropTypes,
  ...blockPropTypes
};

export default Link;
