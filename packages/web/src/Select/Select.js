import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Option = props => <option {...props} />;
export const OptionGroup = props => <optgroup {...props} />;

const Container = styled.div`
  box-sizing: border-box;
  border: ${props => props.theme.borderWidth()} solid currentColor;
  border-radius: ${props => props.theme.borderRadius()};
  background-color: ${props =>
    props.disabled ? props.theme.brandDisabled : props.theme.brandLight};
  box-shadow: 0 2px 4px 0 ${props => props.theme.dropShadow};
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  align-items: center;
  white-space: nowrap;
  position: relative;
  ${props => {
    if (props.disabled) {
      return;
    }
    if (props.invalid) {
      return `color: ${props.theme.brandDanger}`;
    }
    if (props.valid) {
      return `color: ${props.theme.brandSuccess}`;
    }
  }};
`;
Container.displayName = "Select.Container";

const Accessory = styled.div`
  width: ${props => props.theme.spacingSmallest(s => s * 4)};
  display: inline-block;
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
  width: 1em;
  height: 1em;
  font-size: ${props => props.theme.fontSize()};
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
  ${props =>
    `padding: ${props.theme.spacingSmallest()} ${props.theme.spacingSmallest()}`};
  padding-right: ${props => props.theme.spacingSmallest()};
  font-size: ${props => props.theme.fontSize()};
  line-height: inherit;
  cursor: pointer;
  z-index: 1;
  &:focus {
    outline: ${props =>
      `${props.theme.borderWidth()} solid ${props.theme.focusColor}`};
    outline-offset: 4px;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
Control.displayName = "Select.Control";

const Select = props => (
  <Container
    valid={props.valid}
    invalid={props.invalid}
    inline={props.inline}
    disabled={props.disabled}
  >
    <Control {...props} />
    <Accessory>
      <Chevron />
    </Accessory>
  </Container>
);

Select.propTypes = {
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Select;
