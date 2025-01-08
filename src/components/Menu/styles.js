import { inube } from "../Foundations";
import styled from "styled-components";
import { tokens } from "./tokens";

const StyledMenu = styled.div`
  border-radius: 8px;
  width: ${({ $width }) => $width};
  box-shadow: 0px 2px 3px 0px
    ${({ theme }) =>
      theme?.palette?.neutralAlpha?.N40A || inube.palette.neutralAlpha.N40A};
  box-shadow: 0px 6px 10px 4px
    ${({ theme }) =>
      theme?.palette?.neutralAlpha?.N40A || inube.palette.neutralAlpha.N40A};
  background-color: ${({ theme }) =>
    theme?.menu?.background?.color || tokens.background.color};
`;

export { StyledMenu };
