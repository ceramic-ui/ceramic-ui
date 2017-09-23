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

/**
 * Given `props` and a key to look for in props, attempt to resolve the value of
 * a spacing defined in themes. So for example:
 * `resolveSpacing(props, 'gutterX')` will use the value of `props.gutterX`,
 * which will be a spacing short name such as "smaller", to return
 * `props.theme.spacingSmaller`
 *
 * @param {object} props
 * @param {string} propKey
 *
 * @returns {string}
 */
export const resolveSpacing = (props, propKey) => {
  const value = props[propKey];
  if (!value) {
    return;
  }
  const themeProp = `spacing${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  return props.theme[themeProp];
};
