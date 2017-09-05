import React from "react";
import styled from "styled-components";

const SystemFontStack = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.textColor};
  font-size: 1rem;
`;
SystemFontStack.displayName = "SystemFontStack";

export default SystemFontStack;
