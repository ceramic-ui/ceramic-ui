import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { maxWidth, minWidth } from "../mixins/media";
import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

export const justifyChoices = [
  "flex-start",
  "flex-end",
  "center",
  "space-around",
  "space-between"
];

const negativeSpacing = ({ theme }) => theme.spacingSmallest(s => s * -1);

const pullLeft = css`margin-left: ${props => negativeSpacing(props)};`;
const pullRight = css`margin-right: ${props => negativeSpacing(props)};`;
const pullBoth = css`
  margin-left: ${props => negativeSpacing(props)};
  margin-right: ${props => negativeSpacing(props)};
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
  ${props => spacingMixin};

  ${maxWidth.medium`
    & > * { width: 100%; margin-bottom: ${props => props.theme.spacingBase()}; }
  `};

  ${minWidth.medium`
    flex-direction: row;
    ${props =>
      props.justifyContent ? margins[props.justifyContent] : pullLeft};

    & > * {
      margin-left:
        ${props => props.theme.spacingSmallest()};
      margin-right:
        ${props => props.theme.spacingSmallest()};
    }
  `};
`;
ButtonPanel.displayName = "ButtonPanel";
ButtonPanel.propTypes = {
  justifyContent: PropTypes.oneOf(justifyChoices),
  ...spacingPropTypes
};

export default ButtonPanel;
