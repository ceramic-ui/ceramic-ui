import PropTypes from "prop-types";
import styled from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";
import { resolveColor } from "../colors";

const percentage = ({ min, max, value }) =>
  Math.max(Math.min(value / (max - min) * 100, 100), 0);

const ProgressBar = styled.div.attrs({
  role: "progressbar",
  "aria-valuenow": ({ value }) => value,
  "aria-valuemin": ({ min }) => min,
  "aria-valuemax": ({ max }) => max
})`
  width: 100%;
  background-repeat: no-repeat;
  transition: background 300ms ease-in-out;

  ${spacingMixin};

  ${props => {
    const color = resolveColor(props, "appearance");
    return `
      height: ${props.theme.fontSizeBase()};
      background-color: ${props.theme.borderColor};
      background-image: linear-gradient(
        to right,
        ${color},
        ${color}
      );
      background-size: ${percentage(props)}% 100%;
    `;
  }};
`;
ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = {
  appearance: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  ...spacingPropTypes
};
ProgressBar.defaultProps = {
  appearance: "primary",
  min: 0,
  max: 100
};
export default ProgressBar;
