import styled from "styled-components";
import { tokens } from "./tokens";

const StyledMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 12px;
  border-radius: 4px;
  width: ${({ $fullwidth, $width }) => ($fullwidth ? "100%" : $width)};
  background-color: ${({ theme, $appearance }) =>
    theme?.message?.[$appearance]?.background?.color ||
    tokens[$appearance].background.color};
  box-sizing: border-box;
`;

export { StyledMessageContent };
