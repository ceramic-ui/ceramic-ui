import styled from "styled-components";

const Error = styled.p`
  margin: 0;
  color: ${props => props.theme.brandDanger};
`;
Error.displayName = "Error";

export default Error;
