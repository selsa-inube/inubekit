import styled from "styled-components";

import { inube } from "../Foundations";
import { tokens as InputTokens } from "../Input/tokens";

const StyledContainer = styled.div`
  position: relative;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "fit-content")};

  & > label {
    cursor: ${({ disabled }) => disabled && "not-allowed"};
  }
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  gap: 4px;
  pointer-events: ${({ $disabled }) => $disabled && "none"};
`;

const StyledInputContainer = styled.div`
  display: grid;
  height: ${({ $size }) => ($size === "compact" ? "40px" : "48px")};
  padding: 0px 16px;
  gap: 8px;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;

  border: 1px solid
    ${({ theme, disabled, $invalid, $focused }) => {
      if (disabled) {
        return (
          (theme?.input?.border?.color?.disabled ||
            InputTokens.border.color.disabled) +
          "; pointer-events: none; opacity: 0.5;"
        );
      }
      if ($focused) {
        return (
          theme?.input?.border?.color?.focus || InputTokens.border.color.focus
        );
      }
      if ($invalid) {
        return (
          theme?.input?.border?.color?.invalid ||
          InputTokens.border.color.invalid
        );
      }
      return (
        theme?.input?.border?.color?.regular || InputTokens.border.color.regular
      );
    }};

  opacity: ${({ disabled }) => (disabled ? "0.5" : "unset")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const StyledInput = styled.input`
  outline: none;
  padding: 0;
  margin: 0;
  height: 24px;
  font-weight: 400;
  border: none;
  width: 100%;
  font-family: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.size};
  line-height: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.lineHeight};
  letter-spacing: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.tracking};
  background-color: transparent;
  color: ${({ theme, disabled }) => {
    if (disabled) {
      return (
        theme?.input?.content?.color?.disabled ||
        InputTokens.content.color.disabled
      );
    }
    return (
      theme?.input?.content?.color?.regular || InputTokens.content.color.regular
    );
  }};

  ::placeholder {
    color: ${({ theme }) =>
      theme?.input?.placeholder?.color?.regular ||
      InputTokens.placeholder.color.regular};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;

const StyledChevron = styled.div`
  display: flex;
  transition: ease;
  transition-duration: 500ms;
  transform: ${({ $displayList }) =>
    $displayList ? "rotate(-90deg)" : "rotate(90deg)"};
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledChevron,
};
