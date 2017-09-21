import styled from "styled-components";

import { spacingMixin, spacingPropTypes } from "../mixins/spacing";

const Paragraph = styled.p`${spacingMixin};`;
Paragraph.displayName = "Paragraph";
Paragraph.propTypes = {
  ...spacingPropTypes
};

export default Paragraph;
