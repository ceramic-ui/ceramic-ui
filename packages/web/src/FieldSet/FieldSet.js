import Box from "../Box";

const FieldSet = Box.withComponent("fieldset").extend`
  margin-left: 0;
  margin-right: 0;
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
