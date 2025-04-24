import styled from "styled-components";
import { tokens } from "./tokens";

const StyledTag = styled.div`
  display: flex;
  width: fit-content;
  height: 20px;
  padding: 0px 8px;
  border-radius: 16px;
  background-color: ${({ $theme, $appearance }) =>
    $theme && $theme.tag && $theme.tag[$appearance]?.background?.color
      ? $theme.tag[$appearance].background.color
      : tokens[$appearance].background.color};
  border: 1px solid
    ${({ $theme, $appearance }) =>
      $theme && $theme.tag && $theme.tag[$appearance]?.border?.color
        ? $theme.tag[$appearance].border.color
        : tokens[$appearance].border.color};
`;

export { StyledTag };
