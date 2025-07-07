import styled from "styled-components";
import { tokens } from "../tokens.ts";

const StyledProgressBar = styled.div`
  border-radius: 10px;
  transition: width 0.5s;
  height: 6px;
  width: 100%;
  border: 1px solid
    ${({ theme }) => theme?.progressCard?.border?.color || tokens.border.color};

  &::before {
    content: "";
    display: block;
    border-radius: 8px;
    transition: width 0.5s;
    height: 6px;
    width: ${({ $percentage }) => `${$percentage}%`};
    background: ${({ theme }) =>
      theme?.progressCard?.progressBar?.color || tokens.progressBar.color};
  }
`;

export { StyledProgressBar };
