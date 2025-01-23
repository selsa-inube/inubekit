import styled from "styled-components";
import { tokens } from "./tokens";

const StyledDivider = styled.hr`
  border: 0;
  width: 100%;
  border-top: 2px ${({ $dashed }) => ($dashed ? "dashed" : "solid")}
    ${({ theme }) => theme?.divider?.stroke?.color || tokens.stroke.color};
  margin: ${({ $marginTop, $marginBottom }) =>
    `${$marginTop} 0 ${$marginBottom}`};
`;

export { StyledDivider };
