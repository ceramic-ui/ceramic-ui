import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Option = props => <option {...props} />;
export const OptionGroup = props => <optgroup {...props} />;

const Container = styled.div`
  border: 2px solid currentColor;
  background-color: ${props =>
    props.disabled ? props.theme.brandMuted : props.theme.white};
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  align-items: center;
  white-space: nowrap;
  position: relative;
`;
Container.displayName = "Select.Container";

const Accessory = styled.div`
  width: ${props => props.theme.paddingX(s => s * 2)};
  display: inline-block;
  margin-left: ${props => props.theme.paddingX(s => -2 * s)};
  text-align: center;
`;
Accessory.displayName = "Select.Accessory";

const ChevronSVG = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Chevron = styled(ChevronSVG)`
  width: ${props => props.theme.paddingX()};
  height: ${props => props.theme.paddingY()};
  display: block;
  margin: 0 auto;
`;
Chevron.displayName = "Select.Chevron";

const Control = styled.select`
  width: 100%;
  display: ${props => (props.inline ? "inline-block" : "block")};
  appearance: none;
  background: none;
  border: none;
  border-radius: 0;
  color: currentColor;
  ${props => `padding: ${props.theme.paddingY()} ${props.theme.paddingX()}`};
  padding-right: ${props => props.theme.paddingX(s => s * 2)};
  font-size: ${props => props.theme.fontSize()};
  line-height: inherit;
  cursor: pointer;
  z-index: 1;
  &:focus {
    outline: 2px solid ${props => props.theme.focusColor};
    outline-offset: 4px;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
Control.displayName = "Select.Control";

const Select = props => (
  <Container inline={props.inline} disabled={props.disabled}>
    <Control {...props} />
    <Accessory>
      <Chevron />
    </Accessory>
  </Container>
);

Select.propTypes = {
  inline: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Select;
