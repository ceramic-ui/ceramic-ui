import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

export const Heading1 = styled.h1`
  ${spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize1()};
  line-height: 1.25;
`;
Heading1.displayName = "Heading1";

export const Heading2 = styled.h2`
  ${spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize2()};
  line-height: 1.25;
`;
Heading2.displayName = "Heading2";

export const Heading3 = styled.h3`
  ${spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize3()};
  line-height: 1.25;
`;
Heading3.displayName = "Heading3";

export const Heading4 = styled.h4`
  ${spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize4()};
  line-height: 1.25;
`;
Heading4.displayName = "Heading4";

export const Heading5 = styled.h5`
  ${spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize5()};
`;
Heading5.displayName = "Heading5";

export const Heading6 = styled.h6`
  ${spacingMixin};
  font-family: ${props => props.theme.headingFontFamily};
  font-size: ${props => props.theme.fontSize6()};
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
