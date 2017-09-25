import styled from "styled-components";

import { blockMixin, blockPropTypes } from "../mixins/spacing";
import { textMixin, textPropTypes } from "../mixins/typography";

const Text = styled.span`
  ${textMixin};
  ${blockMixin};
`;

Text.displayName = "Text";
Text.propTypes = {
  ...textPropTypes,
  ...blockPropTypes
};

export default Text;
