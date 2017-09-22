import PropTypes from "prop-types";
import styled from "styled-components";

export const Item = styled.div`
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

const isColumn = ({ direction }) =>
  direction === "column" || direction === "column-reverse";
const doesWrap = ({ wrap }) => wrap === "wrap" || wrap === "wrap-reverse";

const Flex = styled.div`
  ${props => `
    margin-bottom: ${doesWrap(props)
      ? props.theme.spacingBase(s => -1 * s)
      : 0};
    margin-left: ${isColumn(props) ? 0 : props.theme.spacingBase(s => -1 * s)};
    display: ${props.inline ? "inline-flex" : "flex"};
    ${!!props.alignItems && `align-items: ${props.alignItems}`};
    ${!!props.alignContent && `align-content: ${props.alignContent}`};
    ${!!props.justifyContent && `justify-content: ${props.justifyContent}`};
    ${!!props.wrap && `flex-wrap: ${props.wrap}`};
    ${!!props.direction && `flex-direction: ${props.direction}`};
    `};
  > ${Item} {
    padding-left: ${props => (isColumn(props) ? 0 : props.theme.spacingBase())};
    padding-bottom: ${props =>
      isColumn(props) || doesWrap(props) ? props.theme.spacingBase() : 0};
  }
`;

Flex.displayName = "Flex";
Flex.propTypes = {
  inline: PropTypes.bool,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  justifyContent: PropTypes.string,
  wrap: PropTypes.string,
  direction: PropTypes.string
};

Flex.Item = Item;

export default Flex;
