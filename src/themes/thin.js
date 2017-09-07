import defaultTheme from "./default";

const size = (base, unit = "rem") => (modify = b => b) =>
  `${modify(base)}${unit}`;

export default {
  ...defaultTheme,
  paddingX: size(0.625),
  paddingY: size(0.625),
  borderWidth: size(1, "px"),
  spacingBase: size(1.25),
  fontSize: size(1),
  readableWidth: size(38),
  borderColor: "#dee2e6",
  focusColor: "#fcc419",
  linkColor: "#329af0",
  linkVisitedColor: "#8859b6",
  brandPrimary: "#329af0",
  brandSecondary: "#1862ab",
  brandSuccess: "#40c057",
  brandDanger: "#f03e3e",
  brandMuted: "#687889",
  brandDisabled: "#ced4da"
};
