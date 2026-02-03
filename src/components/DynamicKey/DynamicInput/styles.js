import { inube } from "../../Foundations";
import { tokens } from "../../Input/tokens";
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${({ $size }) => ($size === "compact" ? "40px" : "48px")};
  height: ${({ $size }) => ($size === "compact" ? "40px" : "48px")};
  box-sizing: border-box;
  border: ${({ theme, $focused }) =>
    $focused
      ? `2px solid ${theme?.input?.border?.color?.focus || tokens.border.color.focus}`
      : `1px solid ${theme?.input?.border?.color?.regular || tokens.border.color.regular}`};
  border-radius: 8px;
  padding: ${({ $size }) => ($size === "compact" ? "6px 12px" : "8px 16px")};
  text-align: center;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 400;
  background: ${({ theme }) =>
    theme?.input?.background?.color?.regular ||
    tokens.background.color.regular};
  color: ${({ theme }) =>
    theme?.input?.content?.color?.regular || tokens.content.color.regular};
  outline: none;

  &::placeholder {
    color: ${({ theme }) =>
      theme?.input?.placeholder?.color?.regular ||
      tokens.placeholder.color.regular};
  }
`;

export { StyledInput };
