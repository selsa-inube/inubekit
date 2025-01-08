import styled, { keyframes } from "styled-components";
import { tokens } from "./tokens";

const sizes = {
  large: {
    width: "40px",
    height: "40px",
  },
  medium: {
    width: "32px",
    height: "32px",
  },
  small: {
    width: "24px",
    height: "24px",
  },
};

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  animation: 0.8s linear infinite ${spinner};
  border: solid 4px;
  border-color: ${({ theme, $transparent, $appearance }) =>
    $transparent === true
      ? theme?.spinner?.[$appearance]?.transparent?.track?.color ||
        tokens[$appearance].transparent.track.color
      : theme?.spinner?.[$appearance]?.solid?.track?.color ||
        tokens[$appearance].solid.track.color};
  border-bottom-color: ${({ $appearance, $transparent, theme }) =>
    $transparent === true
      ? theme?.spinner?.[$appearance]?.transparent?.spin?.color ||
        tokens[$appearance].transparent?.spin?.color
      : theme?.spinner?.[$appearance]?.solid?.spin?.color ||
        tokens[$appearance].solid?.spin?.color};
  border-radius: 50%;
  ${({ $size }) => $size && sizes[$size]}
  box-sizing: border-box;
`;

export { StyledSpinner, sizes };
