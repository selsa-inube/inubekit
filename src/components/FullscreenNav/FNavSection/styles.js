import styled from "styled-components";
import { tokens } from "../tokens";

const StyledDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, $isCollapsible, $isOpen }) =>
    $isCollapsible && $isOpen
      ? theme?.fullscreenNav?.subtitle?.background?.expanded ||
        tokens.subtitle.background.expanded
      : theme?.fullscreenNav?.background?.color || tokens.background.color};

  &:hover {
    cursor: pointer;
  }
`;

export { StyledDetails };
