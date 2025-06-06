import styled from "styled-components";
import { tokens } from "../tokens";
import { inube } from "../../Foundations";

const StyledContainer = styled.div`
  cursor: ${({ $disabled }) => $disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "fit-content")};
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
  pointer-events: ${({ $disabled }) => $disabled && "none"};
  grid-template-columns: ${({ $iconBefore, $iconAfter }) => {
    if ($iconBefore && $iconAfter) return "auto 1fr auto";
    if ($iconBefore) return "auto 1fr";
    if ($iconAfter) return "1fr auto";
    return "1fr";
  }};
  background-color: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.input?.background?.color?.disabled ||
        tokens.background.color.disabled
      : theme?.input?.background?.color?.regular ||
        tokens.background.color.regular};
  border: 1px solid
    ${({ $disabled, $status, $focused, theme }) => {
      const colors = theme?.input?.border?.color || tokens.border.color;
      if ($disabled) return colors.disabled;
      if ($status === "invalid") return colors.invalid;
      if ($focused) return colors.focus;
      return colors.regular;
    }};
`;

const StyledInput = styled.input`
  outline: none;
  padding: 0;
  margin: 0;
  height: 24px;
  border: none;
  width: 100%;
  background-color: transparent;
  font-family: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${({ theme }) =>
    theme?.typography?.body?.large?.size || inube.typography.body.large.size};
  line-height: ${({ theme }) =>
    theme?.typography?.body?.large?.lineHeight ||
    inube.typography.body.large.lineHeight};
  letter-spacing: ${({ theme }) =>
    theme?.typography?.body?.large?.tracking ||
    inube.typography.body.large.tracking};
  font-weight: ${({ theme }) =>
    theme?.typography?.body?.large?.weight ||
    inube.typography.body.large.weight};
  color: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.input?.content?.color?.disabled || tokens.content.color.disabled
      : theme?.input?.content?.color?.regular || tokens.content.color.regular};

  &[type="number"] {
    appearance: textfield;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
  }
  ::placeholder {
    color: ${({ theme }) =>
      theme?.input?.placeholder?.color?.regular ||
      tokens.placeholder.color.regular};
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

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledMessageContainer = styled.div`
  margin-top: 4px;
  pointer-events: none;
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
};
