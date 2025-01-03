import styled from "styled-components";
import { tokens } from "./tokens";

const StyledDivider = styled.hr`
  border: 0;
  border-top: 2px ${({ $dashed }) => ($dashed ? "dashed" : "solid")}
    ${({ theme }) => theme?.divider?.stroke?.color || tokens.stroke.color};
  width: 100%;
  margin: 0;
`;

export { StyledDivider };
