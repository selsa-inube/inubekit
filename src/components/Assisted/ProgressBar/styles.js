import styled from "styled-components";
import { tokens } from "../tokens";

const StyledProgressBar = styled.div`
  border-radius: 10px;
  transition: width 0.5s;
  height: ${({ $isSmallSize }) => ($isSmallSize ? "8px" : "16px")};
  width: 100%;
  background-color: ${({ theme }) =>
    theme?.assisted?.track?.color || tokens.track.color};

  &::before {
    content: "";
    display: block;
    border-radius: 8px;
    transition: width 0.5s;
    height: ${({ $isSmallSize }) => ($isSmallSize ? "8px" : "16px")};
    width: ${({ $currentStep, $totalSteps }) =>
      `${($currentStep / $totalSteps) * 100}%`};
    background: ${({ theme }) =>
      theme?.assisted?.bar?.color || tokens.bar.color};
  }
`;

const StyledProgressIndicator = styled.div``;

export { StyledProgressBar, StyledProgressIndicator };
