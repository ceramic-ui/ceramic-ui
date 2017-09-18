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
  borderRadius: size(3, "px"),
  spacingSmallest: size(0.482),
  spacingSmaller: size(0.694),
  spacingBase: size(1.25),
  spacingLarger: size(1.44),
  spacingLargest: size(2.074),
  fontSize: size(1),
  readableWidth: size(38),
  dropShadow: "rgba(0,0,0,0.2)",
  borderColor: "#dee2e6",
  textColor: black,
  focusColor: "#fcc419",
  black,
  white,
  linkColor: "#329af0",
  linkVisitedColor: "#8859b6",
  brandPrimary: "#0072ed",
  brandSecondary: "#5b5f97",
  brandSuccess: "#40c057",
  brandDanger: "#f03e3e",
  brandMuted: "#687889",
  brandDisabled: "#ced4da"
};
