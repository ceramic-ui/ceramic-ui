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
  borderWidth: size(1, "px"),
  borderRadius: size(3, "px"),
  spacingSmallest: size(0.482),
  spacingSmaller: size(0.694),
  spacingBase: size(1),
  spacingLarger: size(1.44),
  spacingLargest: size(2.074),
  fontSizeBase: size(1),
  fontSize1: size(2.074),
  fontSize2: size(1.728),
  fontSize3: size(1.44),
  fontSize4: size(1.2),
  fontSize5: size(1),
  fontSize6: size(0.833),
  lineHeight: size(1.5, ""),
  readableWidth: size(38),
  mediaSmall: size(576, "px"),
  mediaMedium: size(768, "px"),
  mediaLarge: size(992, "px"),
  mediaXlarge: size(1200, "px"),
  dropShadow: "rgba(0,0,0,0.2)",
  borderColor: "#dee2e6",
  textColor: black,
  focusColor: "#fcc419",
  brandDark: black,
  brandLight: white,
  linkColor: "#329af0",
  linkVisitedColor: "#8859b6",
  brandPrimary: "#0072ed",
  brandSecondary: "#5b5f97",
  brandSuccess: "#40c057",
  brandDanger: "#f03e3e",
  brandMuted: "#687889",
  brandDisabled: "#ced4da"
};
