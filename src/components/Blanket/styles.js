import styled from "styled-components";
import { tokens } from "./tokens";

const StyledBlanket = styled.div`
  position: fixed;
  display: grid;
  place-items: ${({ $isSmallScreen }) =>
    $isSmallScreen ? "center" : "initial"};
  inset: 0;
  background-color: ${({ theme }) =>
    theme?.blanket?.background?.color || tokens.background.color};
  border: none;
  z-index: 1;
  overflow-y: auto;
`;

export { StyledBlanket };
