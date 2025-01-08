import styled from "styled-components";
import { tokens } from "../tokens";

const StyledChildren = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  border-width: 0px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme?.fieldset?.border?.color || tokens.border.color};
  background-color: ${({ theme }) =>
    theme?.fieldset?.legend?.color || tokens.legend.color};
  background-color: gray;
`;

export { StyledChildren };
