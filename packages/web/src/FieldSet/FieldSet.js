import Box from "../Box";

const FieldSet = Box.withComponent("fieldset").extend`
  ${props =>
    `
      border: ${props.theme.borderWidth()} solid ${props.theme.borderColor};
      border-radius: ${props.theme.borderRadius()};
    `};
`;
FieldSet.displayName = "FieldSet";
FieldSet.defaultProps = {
  gutterX: "base",
  gutterY: "base",
  background: "transparent"
};

export default FieldSet;
