import PropTypes from "prop-types";
import styled from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";
import { resolveColor } from "../colors";

const Callout = styled.div`
  ${spacingMixin};
  box-sizing: border-box;

  ${props => {
    const color = resolveColor(props, "appearance");
    return `
      padding: ${props.theme.spacingBase()};
      border: ${props.theme.borderWidth()} solid ${props.theme.borderColor};
      border-radius: ${props.theme.borderRadius()};
      background-color: ${props.theme.brandLight};
      border-color: ${color};
      box-shadow: inset 6px 0 0 -3px ${color},
        0px 2px 4px 0 ${props.theme.dropShadow};
    `;
  }};
`;
Callout.displayName = "Callout";
Callout.propTypes = {
  appearance: PropTypes.string.isRequired,
  ...spacingPropTypes
};
Callout.defaultProps = {
  appearance: "primary"
};

export default Callout;
