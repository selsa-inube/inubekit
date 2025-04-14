import styled from "styled-components";

import { inube } from "../Foundations";
import { tokens as InputTokens } from "../Input/tokens";

const StyledContainer = styled.div`
  position: relative;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "300px")};

  & > label {
    cursor: ${({ disabled }) => disabled && "not-allowed"};
  }
`;

// const StyledInputContainer = styled.div`
//   display: grid;
//   grid-auto-flow: column;
//   grid-template-columns: 1fr auto;
//   align-items: center;
//   box-sizing: border-box;
//   border-radius: 8px;
//   user-select: none;
//   border-width: 1px;
//   border-style: solid;
//   padding-left: 16px;
//   padding-right: 16px;
//   border-color: ${({ theme, disabled, $invalid, $focused }) => {
//     if (disabled) {
//       return (
//         (theme?.input?.border?.color?.disabled ||
//           InputTokens.border.color.disabled) +
//         "; pointer-events: none; opacity: 0.5;"
//       );
//     }
//     if ($focused) {
//       return (
//         theme?.input?.border?.color?.focus || InputTokens.border.color.focus
//       );
//     }
//     if ($invalid) {
//       return (
//         theme?.input?.border?.color?.invalid || InputTokens.border.color.invalid
//       );
//     }
//     return (
//       theme?.input?.border?.color?.regular || InputTokens.border.color.regular
//     );
//   }};

//   opacity: ${({ disabled }) => (disabled ? "0.5" : "unset")};
//   cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
// `;
const StyledInputContainer = styled.div`
  display: grid;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  padding-left: 16px;
  padding-right: 16px;
  pointer-events: ${({ $disabled }) => $disabled && "none"};
  opacity: ${({ $disabled }) => $disabled && "0.5"};
  background-color: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.input?.background?.color?.disabled
      : InputTokens.background.color.default};
  grid-template-columns: 1fr auto;
  border: 1px solid
    ${({ $disabled, $status, $focused, theme }) => {
      if ($disabled) {
        return (
          theme?.input?.border?.color?.disabled ||
          InputTokens.border.color.disabled
        );
      }

      if ($status === "invalid") {
        return (
          theme?.input?.border?.color?.invalid ||
          InputTokens.border.color.invalid
        );
      }

      if ($focused) {
        return (
          theme?.input?.border?.color?.focus || InputTokens.border.color.focus
        );
      }
      return (
        theme?.input?.border?.color?.regular || InputTokens.border.color.regular
      );
    }};
`;
const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  font-family: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.size};
  font-weight: 400;
  line-height: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.lineHeight};
  letter-spacing: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.tracking};
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
  background-color: ${({ theme }) =>
    theme?.input?.background?.color?.regular ||
    InputTokens.background.color.regular};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  width: ${({ $fullwidth }) => $fullwidth && "100%"};
  height: ${({ $size }) => ($size === "compact" ? "40px" : "48px")};
  border: none;
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

export { StyledContainer, StyledInputContainer, StyledInput, StyledChevron };
