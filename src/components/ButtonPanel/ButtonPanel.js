import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const justifyChoices = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  around: "space-around",
  between: "space-between",
  none: "flex-start"
};

const pullLeft = css`
  margin-left: ${props => props.theme.spacingBase(s => -s / 4)};
`;
const pullRight = css`
  margin-right: ${props => props.theme.spacingBase(s => -s / 4)};
`;
const pullBoth = css`
  margin-left: ${props => props.theme.spacingBase(s => -s / 4)};
  margin-right: ${props => props.theme.spacingBase(s => -s / 4)};
`;

const margins = {
  start: pullLeft,
  end: pullRight,
  center: pullBoth,
  around: pullBoth,
  between: pullBoth,
  none: ""
};

const ButtonPanel = styled.div`
  display: ${props => (props.justify === "none" ? "block" : "flex")};
  justify-content: ${props => justifyChoices[props.justify]};
  ${props => margins[props.justify]};

  & > * {
    margin: 0
      ${props =>
        props.justify === "none" ? "0" : props.theme.spacingBase(s => s / 4)};
  }
`;
ButtonPanel.displayName = "ButtonPanel";
ButtonPanel.propTypes = {
  justify: PropTypes.oneOf(Object.keys(justifyChoices)).isRequired
};
ButtonPanel.defaultProps = {
  justify: "start"
};

export default ButtonPanel;
