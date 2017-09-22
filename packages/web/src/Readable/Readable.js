import styled from "styled-components";

const Readable = styled.div`
  @media (min-width: ${props => props.theme.readableWidth()}) {
    box-sizing: border-box;
    max-width: ${props => props.theme.readableWidth()};
  }
`;
Readable.displayName = "Readable";

export default Readable;
