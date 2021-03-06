import styled from "styled-components";

const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: ${props => props.theme.fontSizeBase()};
  color: ${props => props.theme.textColor};
`;
Label.displayName = "Label";

export default Label;
