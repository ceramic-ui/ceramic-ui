import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Downshift from "downshift";

import Button from "../Button";
import Card from "../Card";
import Input from "../Input";

const items = ["apple", "orange", "carrot"];

const DownButton = Button.extend`
  text-align: left;
  text-transform: none;
`;

const DownCard = Card.extend`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const DownInput = Input.extend`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

storiesOf("Examples", module).add(
  "Using with downshift",
  withInfo()(() => (
    <Downshift onChange={action("onChange")}>
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => (
        <div>
          <DownInput {...getInputProps({ placeholder: "Favorite color ?" })} />
          {isOpen ? (
            <DownCard>
              {items
                .filter(
                  i =>
                    !inputValue ||
                    i.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <DownButton
                    block
                    flush
                    appearance="dark"
                    {...getItemProps({ item })}
                    key={item}
                  >
                    {item}
                  </DownButton>
                ))}
            </DownCard>
          ) : null}
        </div>
      )}
    </Downshift>
  ))
);
