import { size } from "../geometry";
import defaultTheme from "./default";

export default {
  ...defaultTheme,
  paddingX: size(0.75),
  paddingY: size(0.75),
  borderWidth: size(2, "px")
};
