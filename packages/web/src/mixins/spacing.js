import PropTypes from "prop-types";
import { css } from "styled-components";

export const vrythm = css`
  margin-top: 0;
  margin-bottom: ${props => (props.flush ? 0 : props.theme.spacingBase())};
`;

export const vrythmPropTypes = {
  flush: PropTypes.bool
};

export const blockMixin = css`
  ${props => props.block && "width: 100%"};
  display: ${props => (props.block ? "block" : "inline-block")};
  ${props => props.block && vrythm};
`;
export const blockPropTypes = {
  block: PropTypes.bool
};
