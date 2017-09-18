import PropTypes from "prop-types";
import { css } from "styled-components";

const spacingWhitelist = {
  smallest: "spacingSmallest",
  smaller: "spacingSmaller",
  base: "spacingBase",
  larger: "spacingLarger",
  largest: "spacingLargest"
};

const getSpacing = ({ theme, flush, spacing }) => {
  if (flush) {
    return 0;
  }
  if (!spacing) {
    return theme[spacingWhitelist.base]();
  }
  const name = spacingWhitelist[spacing];
  if (!name) {
    return 0;
  }
  return theme[name]();
};

export const spacingMixin = css`
  margin-top: 0;
  margin-bottom: ${props => getSpacing(props)};
`;

export const spacingPropTypes = {
  flush: PropTypes.bool
};

export const blockMixin = css`
  ${props => props.block && "width: 100%"};
  display: ${props => (props.block ? "block" : "inline-block")};
  ${props => props.block && spacingMixin};
`;
export const blockPropTypes = {
  block: PropTypes.bool
};
