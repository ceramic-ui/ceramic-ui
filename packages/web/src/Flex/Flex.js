import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { vrythm, vrythmPropTypes } from "../mixins/spacing";

export const Item = styled.div.attrs({
  "data-flush": props => (props.flush ? true : undefined)
})`
  box-sizing: border-box;
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
    margin: 0 -${props.theme.spacingBase()};`};
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  ${props => !!props.alignItems && `align-items: ${props.alignItems}`};
  ${props => !!props.alignContent && `align-content: ${props.alignContent}`};
  ${props =>
    !!props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props => !!props.wrap && `flex-wrap: ${props.wrap}`};
  ${props => !!props.direction && `flex-direction: ${props.direction}`};

  > ${Item} {
    ${props => `
      margin-left: ${props.theme.spacingBase()};
      margin-right: ${props.theme.spacingBase()};`};
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
  ...vrythmPropTypes
};

Flex.Item = Item;

export default Flex;
