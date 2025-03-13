import styled from "styled-components";
import { tokens } from "./tokens";

const StyledMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ $size }) => ($size === "small" ? "16px" : "20px")};
  gap: 12px;
  border-radius: 4px;
  width: ${({ $size }) => ($size === "small" ? "312px" : "500px")};
  background-color: ${({ theme, $appearance }) =>
    theme?.message?.[$appearance]?.background?.color ||
    tokens[$appearance].background.color};
`;

export { StyledMessageContent };
