import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Button from "../Button";
import ButtonPanel from "../ButtonPanel";
import Container from "../Container";
import Error from "../Error";
import Field from "../Field";
import FieldSet from "../FieldSet";
import Flex from "../Flex";
import Form from "../Form";
import Input from "../Input";
import Label from "../Label";
import Legend from "../Legend";
import Switch from "../Switch";

const postCodeRE = /[0-9]{4}/;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initialForm = {
      givenNames: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      postCode: "",
      country: "",
      marketing: true
    };
    this.state = {
      edited: false,
      form: this.initialForm,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleChange(e) {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    const isSwitch = ["checkbox", "radio"].indexOf(e.currentTarget.type) >= 0;
    this.setState({
      edited: true,
      form: {
        ...this.state.form,
        [name]: isSwitch ? e.currentTarget.checked : value
      }
    });
  }
  handleReset(e) {
    this.setState({ edited: false, form: this.initialForm });
  }
  handleSubmit(e) {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length) {
      this.setState({ edited: false, errors });
      return;
    }
    console.log("submitting:", this.state.form);
  }
  validate() {
    const { form } = this.state;
    const required = {};
    Object.keys(this.initialForm).forEach(k => {
      if (!form[k]) {
        required[k] = "This field is required";
      }
    });
    delete required.addressLine2;
    delete required.marketing;
    const invalid = {};
    if (!postCodeRE.test(form.postCode)) {
      invalid.postCode = "Postcode must be 4 digits";
    }
    return {
      ...required,
      ...invalid
    };
  }
  render() {
    const { edited, errors, form } = this.state;
    const hasErrors = !!Object.keys(errors).length;
    return (
      <Container readable disableGutter>
        <Form onSubmit={this.handleSubmit}>
          <FieldSet>
            <Flex>
              <Flex.Item>
                <Legend>Personal information</Legend>
              </Flex.Item>
            </Flex>
            <Flex>
              <Flex.Item grow={1}>
                <Field flush>
                  <Label htmlFor="givenNames">Given names</Label>
                  <Input
                    id="givenNames"
                    name="givenNames"
                    aria-describedby="givenNamesErrors"
                    onChange={this.handleChange}
                    value={form.givenNames}
                    invalid={!!errors.givenNames}
                  />
                  {!!errors.givenNames && (
                    <Error id="givenNamesErrors">{errors.givenNames}</Error>
                  )}
                </Field>
              </Flex.Item>
              <Flex.Item grow={1}>
                <Field flush>
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    aria-describedby="lastNameErrors"
                    onChange={this.handleChange}
                    value={form.lastName}
                    invalid={!!errors.lastName}
                  />
                  {!!errors.lastName && (
                    <Error id="lastNameErrors">{errors.lastName}</Error>
                  )}
                </Field>
              </Flex.Item>
            </Flex>
          </FieldSet>
          <FieldSet>
            <Flex>
              <Flex.Item>
                <Legend>Billing address</Legend>
              </Flex.Item>
            </Flex>
            <Field>
              <Label htmlFor="addressLine1">Street address</Label>
              <Input
                id="addressLine1"
                name="addressLine1"
                aria-describedby="addressLine1Errors"
                onChange={this.handleChange}
                value={form.addressLine1}
                invalid={!!errors.addressLine1}
              />
              {!!errors.addressLine1 && (
                <Error id="addressLine1Errors">{errors.addressLine1}</Error>
              )}

              <Input
                id="addressLine2"
                name="addressLine2"
                aria-describedby="addressLine2Errors"
                onChange={this.handleChange}
                value={form.addressLine2}
                invalid={!!errors.addressLine2}
              />
              {!!errors.addressLine2 && (
                <Error id="addressLine2Errors">{errors.addressLine2}</Error>
              )}
            </Field>
            <Flex>
              <Flex.Item grow={1}>
                <Field>
                  <Label htmlFor="city">Town or city</Label>
                  <Input
                    id="city"
                    name="city"
                    aria-describedby="cityErrors"
                    onChange={this.handleChange}
                    value={form.city}
                    invalid={!!errors.city}
                  />
                  {!!errors.city && (
                    <Error id="cityErrors">{errors.city}</Error>
                  )}
                </Field>
              </Flex.Item>
              <Flex.Item>
                <Field>
                  <Label htmlFor="postCode">Postcode</Label>
                  <Input
                    id="postCode"
                    name="postCode"
                    aria-describedby="postCodeErrors"
                    onChange={this.handleChange}
                    value={form.postCode}
                    invalid={!!errors.postCode}
                  />
                  {!!errors.postCode && (
                    <Error id="postCodeErrors">{errors.postCode}</Error>
                  )}
                </Field>
              </Flex.Item>
            </Flex>
            <Field flush>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                aria-describedby="countryErrors"
                onChange={this.handleChange}
                value={form.country}
                invalid={!!errors.country}
              />
              {!!errors.country && (
                <Error id="countryErrors">{errors.country}</Error>
              )}
            </Field>
          </FieldSet>
          <Field>
            <Switch
              type="checkbox"
              name="marketing"
              aria-describedby="marketingErrors"
              onChange={this.handleChange}
              checked={form.marketing}
              invalid={!!errors.marketing}
            >
              Would you like to receive occasional emails with offers and
              product announcements?
            </Switch>
            {!!errors.marketing && (
              <Error id="marketingErrors">{errors.marketing}</Error>
            )}
          </Field>
          <ButtonPanel justifyContent="flex-end">
            <Button appearance="link" onClick={this.handleReset}>
              Reset
            </Button>
            <Button
              type="submit"
              appearance="primary"
              onClick={this.handleSubmit}
              disabled={!edited && hasErrors}
            >
              Submit
            </Button>
          </ButtonPanel>
        </Form>
      </Container>
    );
  }
}

storiesOf("Examples", module).add("Form Validation", withInfo()(() => <App />));
