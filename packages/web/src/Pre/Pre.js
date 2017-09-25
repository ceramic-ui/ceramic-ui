import styled from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

/*
References:
http://code.stephenmorley.org/html-and-css/fixing-browsers-broken-monospace-font-handling/
*/

const Pre = styled.pre`
  ${spacingMixin};
  overflow: auto;
  font-family: monospace, monospace;
  font-size: ${props => props.theme.fontSizeBase()};
`;
Pre.displayName = "Pre";
Pre.propTypes = {
  ...spacingPropTypes
};

export default Pre;
