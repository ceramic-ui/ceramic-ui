import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Downshift from "downshift";

import { darken } from "../colors";
import Button from "../Button";
import Card from "../Card";
import Container from "../Container";
import Input from "../Input";

const DownButton = Button.extend`
  text-align: left;
  text-transform: none;
  &[data-focused] {
    background-color: ${props => darken(props.theme.white, 5)};
    border-color: ${props => darken(props.theme.white, 5)};
  }
`;

const DownCard = Card.extend`
  ${props =>
    props.isOpen &&
    `
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  `};
`;

const DownInput = Input.extend`
  ${props =>
    props.isOpen &&
    `
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    `};
`;

const items = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const filterItems = term =>
  items.filter(item => item.toLowerCase().indexOf(term.toLowerCase()) >= 0);

const renderItems = (items, { getItemProps, highlightedIndex }) => {
  return items.map((item, index) => (
    <DownButton
      block
      flush
      data-focused={highlightedIndex === index || undefined}
      appearance="dark"
      key={item}
      {...getItemProps({ item })}
    >
      {item}
    </DownButton>
  ));
};

storiesOf("Examples", module).add("Using with downshift", () => (
  <Downshift onChange={action("onChange")}>
    {childProps => {
      const { getRootProps, getInputProps, isOpen, inputValue } = childProps;
      return (
        <Container readable {...getRootProps({ refKey: "innerRef" })}>
          <DownInput
            {...getInputProps({ placeholder: "Favorite color?" })}
            isOpen={isOpen}
          />
          {isOpen && (
            <DownCard isOpen>
              {renderItems(filterItems(inputValue), childProps)}
            </DownCard>
          )}
        </Container>
      );
    }}
  </Downshift>
));
