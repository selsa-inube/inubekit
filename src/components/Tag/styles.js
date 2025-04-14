import styled from "styled-components";
import { tokens } from "./tokens";

const StyledTag = styled.div`
  display: inline-block;
  border-radius: 4px;
  padding: 0px 6px;
  background-color: ${({ $weight, $appearance }) =>
    tokens[$appearance][$weight].background.color};
`;

export { StyledTag };
