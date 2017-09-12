import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { lighten } from "../colors";

const Status = styled.div`
  width: ${props => props.theme.fontSize(s => s * 1.4)};
  height: ${props => props.theme.fontSize(s => s * 1.4)};
  margin-right: ${props => props.theme.spacingBase(s => s / 2)};
  display: inline-block;
  border: ${props => props.theme.borderWidth()} solid currentColor;
  box-shadow: 0 2px 4px 0 ${props => lighten(props.theme.textColor, 75)};
  border-radius: 100%;
  position: relative;
  transition: box-shadow 100ms ease-in;
  flex-shrink: 0;
  &:after {
    content: "";
    width: ${props => props.theme.fontSize()};
    height: ${props => props.theme.fontSize()};
    border-radius: ${props => props.theme.fontSize()};
    position: absolute;
    top: ${props => props.theme.fontSize(s => s * 0.2)};
    left: ${props => props.theme.fontSize(s => s * 0.2)};
    background-color: currentColor;
    opacity: 0;
    transition: opacity 80ms ease-in;
  }
`;
Status.displayName = "Switch.Status";

const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;
Label.displayName = "Switch.Label";

const Control = styled.input.attrs({
  type: "Switch"
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:checked + ${Label} > ${Status} {
    box-shadow: none;
  }
  &:checked + ${Label} > ${Status}:after {
    opacity: 1;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:disabled + ${Label} > ${Status} {
    border-color: ${props => props.theme.brandDisabled};
    background-color: ${props => props.theme.brandDisabled};
    box-shadow: none;
  }
  &:focus + ${Label} {
    outline: 2px solid ${props => props.theme.focusColor};
    outline-offset: 2px;
  }
`;
Control.displayName = "Switch.Control";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;
Container.displayName = "Switch.Container";

const Content = styled.div`display: inline-block;`;
Content.displayName = "Switch.Content";

const Switch = ({ children, ...rest }) => (
  <Container>
    <Control {...rest} />
    <Label>
      <Status />
      <Content>{children}</Content>
    </Label>
  </Container>
);
Switch.displayName = "Switch";
Switch.propTypes = {
  type: PropTypes.oneOf(["checkbox", "radio"]).isRequired
};

export default Switch;
