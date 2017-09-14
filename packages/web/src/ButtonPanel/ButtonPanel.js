import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { maxWidth, minWidth } from "../mixins/media";
import { vrythm, vrythmPropTypes } from "../mixins/spacing";

export const justifyChoices = [
  "flex-start",
  "flex-end",
  "center",
  "space-around",
  "space-between"
];

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
  "flex-start": pullLeft,
  "flex-end": pullRight,
  center: pullBoth,
  "space-around": pullBoth,
  "space-between": pullBoth
};

const ButtonPanel = styled.div`
  display: ${props => (props.justifyContent ? "flex" : "block")};
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  ${props => vrythm};

  ${maxWidth.medium`
    & > * { width: 100%; margin-bottom: ${props => props.theme.spacingBase()}; }
  `};

  ${minWidth.medium`
    flex-direction: row;
    ${props =>
      props.justifyContent ? margins[props.justifyContent] : pullLeft};

    & > * {
      margin-left:
        ${props => props.theme.spacingBase(s => s / 4)};
      margin-right:
        ${props => props.theme.spacingBase(s => s / 4)};
    }
  `};
`;
ButtonPanel.displayName = "ButtonPanel";
ButtonPanel.propTypes = {
  justifyContent: PropTypes.oneOf(justifyChoices),
  ...vrythmPropTypes
};

export default ButtonPanel;
