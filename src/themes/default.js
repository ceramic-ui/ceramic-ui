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

const size = (base, unit = "rem") => (modify = b => b) =>
  `${modify(base)}${unit}`;

const white = "#fff";
const black = "#212529";

export default {
  fontFamily: systemFontStack,
  headingFontFamily: systemFontStack,
  paddingX: size(1),
  paddingY: size(1),
  spacingBase: size(1.25),
  fontSize: size(1),
  readableWidth: size(38),
  borderColor: "#dee2e6",
  textColor: black,
  focusColor: "#fcc419",
  black,
  white,
  brandDefault: "#495057",
  brandPrimary: "#1c7cd6",
  brandSecondary: "#0b7285",
  brandSuccess: "#2f9e44",
  brandDanger: "#e03131"
};
