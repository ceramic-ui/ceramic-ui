import { size } from "../geometry";

const systemFontStack = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
].join(",");

const white = "#fff";
const black = "#212529";

export default {
  fontFamily: systemFontStack,
  headingFontFamily: systemFontStack,
  paddingX: size(0.625),
  paddingY: size(0.625),
  borderWidth: size(1, "px"),
  spacingBase: size(1.25),
  fontSize: size(1),
  readableWidth: size(38),
  borderColor: "#dee2e6",
  textColor: black,
  focusColor: "#fcc419",
  black,
  white,
  linkColor: "#329af0",
  linkVisitedColor: "#8859b6",
  brandPrimary: "#329af0",
  brandSecondary: "#1862ab",
  brandSuccess: "#40c057",
  brandDanger: "#f03e3e",
  brandMuted: "#687889",
  brandDisabled: "#ced4da"
};
