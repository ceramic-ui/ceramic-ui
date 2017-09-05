import React from "react";
import styled from "styled-components";

const Card = styled.div`
  margin: 0 0 ${props => props.theme.spacingBase()};
  padding: ${props => props.theme.paddingY()} ${props => props.theme.paddingX()};
  border: 1px solid ${props => props.theme.borderColor};
`;
Card.displayName = "Card";

export default Card;
