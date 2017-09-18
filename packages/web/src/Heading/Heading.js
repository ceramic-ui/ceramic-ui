import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

export const Heading1 = styled.h1`
  ${props => spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize(s => s * 2.074)};
  line-height: 1.25;
`;
Heading1.displayName = "Heading1";

export const Heading2 = styled.h2`
  ${props => spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize(s => s * 1.728)};
  line-height: 1.25;
`;
Heading2.displayName = "Heading2";

export const Heading3 = styled.h3`
  ${props => spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize(s => s * 1.44)};
  line-height: 1.25;
`;
Heading3.displayName = "Heading3";

export const Heading4 = styled.h4`
  ${props => spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize(s => s * 1.2)};
  line-height: 1.25;
`;
Heading4.displayName = "Heading4";

export const Heading5 = styled.h5`
  ${props => spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize()};
`;
Heading5.displayName = "Heading5";

export const Heading6 = styled.h6`
  ${props => spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize(s => s * 0.833)};
`;
Heading6.displayName = "Heading6";

const mapping = [
  undefined,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6
];

const Heading = ({ level, ...rest }) => {
  const Component = mapping[level];
  return <Component {...rest} />;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  ...spacingPropTypes
};

Heading.defaultProps = {
  level: 1
};

export default Heading;
