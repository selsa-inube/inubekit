import styled from "styled-components";
import { tokens } from "./tokens";

const StyledMessageContent = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  border-radius: 4px;
  background-color: ${({ theme, $appearance }) =>
    theme?.message?.[$appearance]?.content?.color ||
    tokens[$appearance].content.color};
`;

export { StyledMessageContent };
