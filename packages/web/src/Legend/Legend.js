import { Heading4 } from "../Heading";

const Legend = Heading4.withComponent("legend").extend`
  display: block;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  appearance: none;
`;
Legend.displayName = "Legend";

export default Legend;
