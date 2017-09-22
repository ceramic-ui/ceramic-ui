import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

const calculateMaxWidth = props => {
  return props.maxWidths.map(({ media, value }) => {
    const mediaKey = `media${media.charAt(0).toUpperCase()}${media.slice(1)}`;
    const screenSize = props.theme[mediaKey];
    if (!screenSize) {
      return;
    }
    const clean = Number(value);
    const pixels = `${clean}px`;
    return css`
      @media (min-width: ${screenSize()}) {
        max-width: ${pixels};
      }
    `;
  });
};

const Container = styled.div`
  ${spacingMixin};
  box-sizing: border-box;
  padding: 0 ${props => !props.disableGutter && props.theme.spacingBase()};
  margin-left: auto;
  margin-right: auto;
  ${calculateMaxWidth};
`;
Container.displayName = "Container";
Container.propTypes = {
  disableGutter: PropTypes.bool,
  maxWidths: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  ...spacingPropTypes
};
Container.defaultProps = {
  maxWidths: [{ media: "large", value: 960 }]
};

export default Container;
