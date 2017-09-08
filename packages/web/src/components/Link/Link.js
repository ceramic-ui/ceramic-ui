import React from "react";
import styled from "styled-components";

const Link = styled.a`
  &,
  &:hover,
  &:focus {
    color: ${props => props.theme.linkColor};
  }
  &:visited {
    color: ${props => props.theme.linkVisitedColor};
  }
`;
Link.displayName = "Link";

export default Link;
