import styled from "styled-components";
import { tokens } from "../Input/tokens";

const StyledContainer = styled.div`
  display: inline-flex;
  gap: 8px;
  pointer-events: ${({ $disabled }) => $disabled && "none"};
`;

const StyledInput = styled.input`
  width: ${({ $size }) => ($size === "compact" ? "40px" : "48px")};
  height: ${({ $size }) => ($size === "compact" ? "40px" : "48px")};
  box-sizing: border-box;
  border: ${({ theme, $focused, $disabled }) => {
    const colors = theme?.input?.border?.color || tokens.border.color;

    if ($disabled) return `1px solid ${colors.disabled}`;
    if ($focused) return `2px solid ${colors.focus}`;
    return `1px solid ${colors.regular}`;
  }};
  border-radius: 8px;
  padding: ${({ $size }) => ($size === "compact" ? "6px 12px" : "8px 16px")};
  text-align: center;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 400;
  background: ${({ theme, $disabled }) =>
    $disabled
      ? theme?.input?.background?.color?.disabled ||
        tokens.background.color.disabled
      : theme?.input?.background?.color?.regular ||
        tokens.background.color.regular};

  color: ${({ theme, $disabled }) =>
    $disabled
      ? theme?.input?.content?.color?.disabled || tokens.content.color.disabled
      : theme?.input?.content?.color?.regular || tokens.content.color.regular};

  outline: none;

  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "text")};

  &::placeholder {
    color: ${({ theme }) =>
      theme?.input?.placeholder?.color?.regular ||
      tokens.placeholder.color.regular};
  }
`;

export { StyledContainer, StyledInput };
