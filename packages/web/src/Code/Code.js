import styled from "styled-components";

/*
References:
http://code.stephenmorley.org/html-and-css/fixing-browsers-broken-monospace-font-handling/
*/

const Code = styled.code`
  font-family: monospace, monospace;
  font-size: ${props => props.theme.fontSizeBase()};
`;
Code.displayName = "Code";

export default Code;
