import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider as TP } from "styled-components";

import defaultTheme from "../themes/default";

const ThemeProvider = ({ theme, ...rest }) => {
  const composed = { ...defaultTheme, ...theme };
  return <TP theme={composed} {...rest} />;
};
ThemeProvider.displayName = "ThemeProvider";
ThemeProvider.propTypes = { theme: PropTypes.object };
ThemeProvider.defaultProps = { theme: {} };

export default ThemeProvider;
