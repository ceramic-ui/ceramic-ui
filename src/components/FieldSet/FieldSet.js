import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "../Card";

const FieldSet = Card.withComponent("fieldset");
FieldSet.displayName = "FieldSet";

export default FieldSet;
