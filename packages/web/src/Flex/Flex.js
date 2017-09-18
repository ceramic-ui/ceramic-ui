import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

export const Item = styled.div.attrs({
  "data-flush": props => (props.flush ? true : undefined)
})`
  flex-grow: ${props => props.grow || 0};
  flex-shrink: ${props => props.shrink || 0};
  flex-basis: ${props => props.basis || "auto"};
  order: ${props => props.order || 0};
`;
Item.displayName = "Flex.Item";
Item.propTypes = {
  grow: PropTypes.number,
  shrink: PropTypes.number,
  order: PropTypes.number,
  basis: PropTypes.string
};

const Flex = styled.div`
  ${props => `
    margin-left: ${props.theme.spacingBase(s => -1 * s)};
    display: ${props.inline ? "inline-flex" : "flex"};
    ${!!props.alignItems && `align-items: ${props.alignItems}`};
    ${!!props.alignContent && `align-content: ${props.alignContent}`};
    ${!!props.justifyContent && `justify-content: ${props.justifyContent}`};
    ${!!props.wrap && `flex-wrap: ${props.wrap}`};
    ${!!props.direction && `flex-direction: ${props.direction}`};
  `};
  > ${Item} {
    padding-left: ${props => props.theme.spacingBase()};
  }
`;

Flex.displayName = "Flex";
Flex.propTypes = {
  inline: PropTypes.bool,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  justifyContent: PropTypes.string,
  wrap: PropTypes.string,
  direction: PropTypes.string,
  ...spacingPropTypes
};

Flex.Item = Item;

export default Flex;
