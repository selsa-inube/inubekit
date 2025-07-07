import styled from "styled-components";
import { tokens } from "./tokens";

const StyledFieldset = styled.fieldset`
  display: flex;
  border-radius: 8px;
  margin: 0;
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  padding: ${({ $spacing }) =>
    $spacing === "compact" ? "8px 12px 16px" : "14px 20px 24px"};
  border: 1px solid
    ${({ theme }) => theme?.fieldset?.border?.color || tokens.border.color};
`;

export { StyledFieldset };
