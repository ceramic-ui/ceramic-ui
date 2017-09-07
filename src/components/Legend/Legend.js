import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Label from "../Label";
import { Heading4 } from "../Heading";

const Legend = Heading4.withComponent("legend");
Legend.displayName = "Legend";
Legend.propTypes = {};

export default Legend;
