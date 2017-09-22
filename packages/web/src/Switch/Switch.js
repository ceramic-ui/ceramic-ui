import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Status = styled.div`
  margin-right: ${props => props.theme.spacingSmallest()};
  display: inline-block;
  border: ${props => props.theme.borderWidth()} solid currentColor;
  box-shadow: 0 2px 4px 0 ${props => props.theme.dropShadow};
  border-radius: 100%;
  position: relative;
  transition: box-shadow 100ms ease-in;
  flex-shrink: 0;
  &:after {
    content: "";
    transform: scale3d(0.8, 0.8, 1);
    transform-origin: 50% 50%;
    border-radius: ${props => props.theme.fontSize()};
    position: absolute;
    top: 0;
    left: 0;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 80ms ease-in;
  }

  ${props => {
    const size = props.theme.fontSize(s => s * 1.2);
    return `
      width: ${size};
      height: ${size};
      &:after {
        width: ${size};
        height: ${size};
      }
    `;
  }};
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
